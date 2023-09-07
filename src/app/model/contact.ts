export class ContactInfo {
    address: string;
    phone: string;
    email: string;

    constructor(obj?: any) {
        this.address = obj && obj.address || "";
        this.phone = obj && obj.phone || "";
        this.email = obj && obj.email || "";
    }
}