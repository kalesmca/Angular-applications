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
            {
                label: 'Gender',
                type: 'dropDown',
                value: '',
                model: '',
                options: [{ name: 'male', value: 'Male' }, { name: 'female', value: 'Female' }]
            },

            {
                label: 'E-mail',
                type: 'input',
                value: '',
                model: ''
            }

        ]
    }

    addressLayout = {
        header: "Address & communication",
        fields: [
            {
                label: 'place',
                type: 'input',
                value: '',
                model: ''
            },
            {
                label: 'city',
                type: 'input',
                value: 'city',
                model: ''
            },
            {
                label: 'state',
                type: 'dropDown',
                value: '',
                model: '',
                options: this.donorModel.stateList
            },
            {
                label: 'pincode',
                type: 'input',
                value: '',
                model: '',
            },
            {
                label: 'Phone Number',
                type: 'input',
                value: '',
                model: ''
            }

        ]
    }


}