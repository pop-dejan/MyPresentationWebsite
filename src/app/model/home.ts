export class HomeInfo {
    headline: string;
    subtitle: string;
    home_Text: string;

    constructor(obj?: any) {
        this.headline = obj && obj.headline || "";
        this.subtitle = obj && obj.subtitle || "";
        this.home_Text = obj && obj.home_Text || "";
    }
}