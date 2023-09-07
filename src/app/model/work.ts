export class WorkInfo {
    title: string;
    subtitle: string;
    duration: string;
    text: string[];

    constructor(obj?: any) {
        this.title = obj && obj.title || "";
        this.subtitle = obj && obj.subtitle || "";
        this.duration = obj && obj.duration || "";
        this.text = obj && obj.text || [];
    }
}



