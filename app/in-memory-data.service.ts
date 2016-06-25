/**
 * Created by hiten on 6/25/2016.
 */

export class InMemoryDataService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'DeadPool'},
            {id: 13, name: 'Iron Man'},
            {id: 14, name: 'Hulk'},
            {id: 15, name: 'Magneto'},
            {id: 16, name: 'Captain America'},
            {id: 17, name: 'Spider Man'},
            {id: 18, name: 'Flash'},
            {id: 19, name: 'Aqua Man'},
            {id: 20, name: 'Thor'}
        ];
        return {heroes};
    }
}