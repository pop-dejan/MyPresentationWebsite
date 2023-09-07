export class EducationInfo {
    headline: string;
    subtitle: string;
    schools: School[];

    constructor(obj?: any) {
        this.headline = obj && obj.headline || "";
        this.subtitle = obj && obj.subtitle || "";
        this.schools = obj && obj.schools && obj.schools.map((elem: any) => new School(elem)) || [];
    }
}

export class School {
    _id: number;
    title: string;
    subtitle: string;
    duration: string;
    text: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.title = obj && obj.title || "";
        this.subtitle = obj && obj.subtitle || "";
        this.duration = obj && obj.duration || "";
        this.text = obj && obj.text || "";
    }
}