import { OnInit, Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as go from "gojs";


@Component({
  selector: 'app-root',
  templateUrl: './app-flowchart.component.html',
  styleUrls: ['./app-flowchart.component.css']
})
export class AppFlowchartComponent implements OnInit, AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }

  name = 'GoJS';

  @ViewChild('myDiagramDiv')
  element: ElementRef;

  ngAfterViewInit() {

    const $ = go.GraphObject.make;

    const myDiagram: go.Diagram = $(go.Diagram, this.element.nativeElement,
      {
        initialContentAlignment: go.Spot.Center,  // center the content
        "undoManager.isEnabled": true  // enable undo & redo
      });


    const myPalette: go.Palette =
      $(go.Palette, "myPaletteDiv",  // must name or refer to the DIV HTML element
        {
          "animationManager.duration": 800, // slightly longer than default (600ms) animation
          nodeTemplateMap: myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
          model: new go.GraphLinksModel([  // specify the contents of the Palette
            {category: "Start", text: "Start"},
            {text: "Step"},
            {text: "???", figure: "Diamond"},
            {category: "End", text: "End"},
            {category: "Comment", text: "Comment"}
          ])
        });


    myDiagram.nodeTemplate =
      $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {strokeWidth: 0},
          new go.Binding("fill", "color")),
        $(go.TextBlock,
          {margin: 8},
          new go.Binding("text", "key"))
      );


    myDiagram.addDiagramListener("Modified", function(e) {
      const button = <HTMLInputElement>document.getElementById("SaveButton");
      if (button) {
        button.disabled = !myDiagram.isModified;
      }
      const idx = document.title.indexOf("*");
      if (myDiagram.isModified) {
        if (idx < 0) {
          document.title += "*";
        }
      } else {
        if (idx >= 0) {
          document.title = document.title.substr(0, idx);
        }
      }
    });


    function nodeStyle() {
      return [
        // The Node.location comes from the "loc" property of the node data,
        // converted by the Point.parse static method.
        // If the Node.location is changed, it updates the "loc" property of the node data,
        // converting back using the Point.stringify static method.
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        {
          // the Node.location is at the center of each node
          locationSpot: go.Spot.Center,
          // isShadowed: true,
          // shadowColor: "#888",
          //  handle mouse enter/leave events to show/hide the ports
          mouseEnter: function(e, obj) {showPorts(obj.part, true);},
          mouseLeave: function(e, obj) {showPorts(obj.part, false);}
        }
      ];
    }

    function makePort(name, spot, output, input) {
      // the port is basically just a small circle that has a white stroke when it is made visible
      return $(go.Shape, "Circle",
        {
          fill: "transparent",
          stroke: null,  // this is changed to "white" in the showPorts function
          desiredSize: new go.Size(8, 8),
          alignment: spot, alignmentFocus: spot,  // align the port on the main Shape
          portId: name,  // declare this object to be a "port"
          fromSpot: spot, toSpot: spot,  // declare where links may connect at this port
          fromLinkable: output, toLinkable: input,  // declare whether the user may draw links to/from here
          cursor: "pointer"  // show a different cursor to indicate potential link point
        });
    }


    const lightText = 'whitesmoke';
    myDiagram.nodeTemplateMap.add("",  // the default category
      $(go.Node, "Spot", nodeStyle(),
        // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
        $(go.Panel, "Auto",
          $(go.Shape, "Rectangle",
            {fill: "#00A9C9", stroke: null},
            new go.Binding("figure", "figure")),
          $(go.TextBlock,
            {
              font: "bold 11pt Helvetica, Arial, sans-serif",
              stroke: lightText,
              margin: 8,
              maxSize: new go.Size(160, NaN),
              wrap: go.TextBlock.WrapFit,
              editable: true
            },
            new go.Binding("text").makeTwoWay())
        ),
        // four named ports, one on each side:
        makePort("T", go.Spot.Top, false, true),
        makePort("L", go.Spot.Left, true, true),
        makePort("R", go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, true, false)
      ));

    myDiagram.nodeTemplateMap.add("Start",
      $(go.Node, "Spot", nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "Circle",
            {minSize: new go.Size(40, 40), fill: "#79C900", stroke: null}),
          $(go.TextBlock, "Start",
            {font: "bold 11pt Helvetica, Arial, sans-serif", stroke: lightText},
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the top, all output only:
        makePort("L", go.Spot.Left, true, false),
        makePort("R", go.Spot.Right, true, false),
        makePort("B", go.Spot.Bottom, true, false)
      ));

    myDiagram.nodeTemplateMap.add("End",
      $(go.Node, "Spot", nodeStyle(),
        $(go.Panel, "Auto",
          $(go.Shape, "Circle",
            {minSize: new go.Size(40, 40), fill: "#DC3C00", stroke: null}),
          $(go.TextBlock, "End",
            {font: "bold 11pt Helvetica, Arial, sans-serif", stroke: lightText},
            new go.Binding("text"))
        ),
        // three named ports, one on each side except the bottom, all input only:
        makePort("T", go.Spot.Top, false, true),
        makePort("L", go.Spot.Left, false, true),
        makePort("R", go.Spot.Right, false, true)
      ));

    myDiagram.nodeTemplateMap.add("Comment",
      $(go.Node, "Auto", nodeStyle(),
        $(go.Shape, "File",
          {fill: "#EFFAB4", stroke: null}),
        $(go.TextBlock,
          {
            margin: 5,
            maxSize: new go.Size(200, NaN),
            wrap: go.TextBlock.WrapFit,
            textAlign: "center",
            editable: true,
            font: "bold 12pt Helvetica, Arial, sans-serif",
            stroke: '#454545'
          },
          new go.Binding("text").makeTwoWay())
        // no ports, because no links are allowed to connect with a comment
      ));


    myDiagram.linkTemplate =
      $(go.Link,  // the whole link panel
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 5, toShortLength: 4,
          relinkableFrom: true,
          relinkableTo: true,
          reshapable: true,
          resegmentable: true,
          // mouse-overs subtly highlight links:
          mouseEnter: function(e, link) {link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)";},
          mouseLeave: function(e, link) {link.findObject("HIGHLIGHT").stroke = "transparent";}
        },
        new go.Binding("points").makeTwoWay(),
        $(go.Shape,  // the highlight shape, normally transparent
          {isPanelMain: true, strokeWidth: 8, stroke: "transparent", name: "HIGHLIGHT"}),
        $(go.Shape,  // the link path shape
          {isPanelMain: true, stroke: "gray", strokeWidth: 2}),
        $(go.Shape,  // the arrowhead
          {toArrow: "standard", stroke: null, fill: "gray"}),
        $(go.Panel, "Auto",  // the link label, normally not visible
          {visible: false, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5},
          new go.Binding("visible", "visible").makeTwoWay(),
          $(go.Shape, "RoundedRectangle",  // the label shape
            {fill: "#F8F8F8", stroke: null}),
          $(go.TextBlock, "Yes",  // the label
            {
              textAlign: "center",
              font: "10pt helvetica, arial, sans-serif",
              stroke: "#333333",
              editable: true
            },
            new go.Binding("text").makeTwoWay())
        )
      );

    function showPorts(node, show) {
      const diagram = node.diagram;
      if (!diagram || diagram.isReadOnly || !diagram.allowLink) {
        return;
      }
      node.ports.each(function(port) {
        port.stroke = (show ? "white" : null);
      });
    }

    function save() {
      (<HTMLInputElement>document.getElementById("mySavedModel")).value = myDiagram.model.toJson();
      myDiagram.isModified = false;
    }
    function load() {
      myDiagram.model = go.Model.fromJson((<HTMLInputElement>document.getElementById("mySavedModel")).value);
    }

    function showLinkLabel(e) {
      const label = e.subject.findObject("LABEL");
      if (label !== null) {
        label.visible = (e.subject.fromNode.data.figure === "Diamond");
      }
    }
    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;
    load();  // load an initial diagram from some JSON text
    // initialize the Palette that is on the left side of the page

    // The following code overrides GoJS focus to stop the browser from scrolling
    // the page when either the Diagram or Palette are clicked or dragged onto.
    function customFocus() {
      const x = window.scrollX || window.pageXOffset;
      const y = window.scrollY || window.pageYOffset;
      go.Diagram.prototype.doFocus.call(this);
      window.scrollTo(x, y);
    }
    myDiagram.doFocus = customFocus;
    myPalette.doFocus = customFocus;

    throw new Error("Method not implemented.");
  }

}
