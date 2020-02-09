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
                model: '',
                dbName: 'donorName'
            },
            {
                label: 'Donor DOB',
                type: 'date',
                value: '',
                model: '',
                dbName: 'donorDOB'
            },
            {
                label: 'Blood group',
                type: 'dropDown',
                value: '',
                model: '',
                options: this.donorModel.bloodGroupList,
                dbName: 'bloodGroup'

            },
            {
                label: 'Gender',
                type: 'dropDown',
                value: '',
                model: '',
                options: [{ name: 'male', value: 'Male' }, { name: 'female', value: 'Female' }],
                dbName: 'donorGender'
            },

            {
                label: 'E-mail',
                type: 'input',
                value: '',
                model: '',
                dbName: 'donormailId'
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
                model: '',
                dbName: 'donorPlace'
            },
            {
                label: 'city',
                type: 'input',
                value: 'city',
                model: '',
                dbName: 'donorCity'
            },
            {
                label: 'state',
                type: 'dropDown',
                value: '',
                model: '',
                options: this.donorModel.stateList,
                dbName: 'donorState'
            },
            {
                label: 'pincode',
                type: 'input',
                value: '',
                model: '',
                dbName: 'donorPinCode'
            },
            {
                label: 'Phone Number',
                type: 'input',
                value: '',
                model: '',
                dbName: 'donorPhoneNumber'
            }

        ]
    }


}