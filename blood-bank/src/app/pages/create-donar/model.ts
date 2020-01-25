export class CreateDonor {
    constructor() {

    }
    donorName = '';
    bloodGroupList = [{ name: 'aPos', value: 'A+ve' },
    { name: 'aNeg', value: 'A-ve' }, { name: 'bPos', value: 'B+ve' },
    { name: 'BNeg', value: 'B-ve' }, { name: 'oPos', value: 'O+ve' },
    { name: 'oNeg', value: 'O-ve' }, { name: 'abNeg', value: 'AB-ve' }, { name: 'abPos', value: 'AB+ve' }]

    stateList = [{ name: 'andra', value: 'Aandra' }, { name: 'bengal', value: 'Bengal' },
    { name: 'karnataka', value: 'Karnataka' }, { name: 'kerala', value: 'Kerala' },
    { name: 'tamilnadu', value: 'Tamilnadu' }]
}