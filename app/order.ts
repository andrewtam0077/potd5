export class Order {
    constructor(
        public name: string,
        public email: string,
        public phone: number | null, //can be of type number or null if phone is unknown
        public drink: string,
        public tempPreference: string,
        public sendText: boolean | null, //put this if maybe user won't enter
            //meaning default for boolean will be false
    ) {
        
    }
}