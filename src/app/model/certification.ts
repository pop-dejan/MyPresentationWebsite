export class CertificationInfo {
    title: string;
    subtitle: string;
    duration: string;
    final_Grade: string;
    image_Info: ImageInfo;
    text: string[];

    constructor(obj?: any) {
        this.title = obj && obj.title || "";
        this.subtitle = obj && obj.subtitle || "";
        this.duration = obj && obj.duration || "";
        this.final_Grade = obj && obj.final_Grade || "";
        this.image_Info =(obj && obj.image_Info && new ImageInfo(obj.image_Info)) || new ImageInfo();
        this.text = obj && obj.text || [];
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

