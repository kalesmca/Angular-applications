import { CreateDonor } from './model';
export class CreateLayout {
    donorModel = new CreateDonor();

    layout = {
        header: "personal Info",
        fields: [
            {
                label: 'Donor Name',
                type: 'input',
                value: '',
                model: ''
            },
            {
                label: 'Donor DOB',
                type: 'date',
                value: '',
                model: ''
            },
            {
                label: 'Blood group',
                type: 'dropDown',
                value: '',
                model: '',
                options: this.donorModel.bloodGroupList
            },

        ]
    }
}