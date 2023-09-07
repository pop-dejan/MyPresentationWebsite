export class AboutInfo {
    headline: string;
    subtitle: string;
    about_Text: string;
    image_Info: ImageInfo;
    medias: Media[];

    constructor(obj?: any) {
        this.headline = obj && obj.headline || "";
        this.subtitle = obj && obj.subtitle || "";
        this.about_Text = obj && obj.about_Text || "";
        this.image_Info =(obj && obj.image_Info && new ImageInfo(obj.image_Info)) || new ImageInfo();
        this.medias = obj && obj.medias && obj.medias.map((elem: any) => new Media(elem)) || [];
    }
}

export class ImageInfo {
    image_Url: string;
    image_Alt: string;
  
    constructor(obj?: any) {
      this.image_Url = (obj && obj.image_Url) || '';
      this.image_Alt = (obj && obj.image_Alt) || '';
    }
}

export class Media {
    _id: number;
    type: string;
    body: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.type = obj && obj.type || "";
        this.body = obj && obj.body || "";
    }
}