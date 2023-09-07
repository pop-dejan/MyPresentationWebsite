export class ProjectsInfo {
    headline: string;
    subtitle: string;
    projects: Project[];

    constructor(obj?: any) {
        this.headline = obj && obj.headline || "";
        this.subtitle = obj && obj.subtitle || "";
        this.projects = obj && obj.projects && obj.projects.map((elem: any) => new Project(elem)) || [];
    }
}

export class Project {
    _id: number;
    headline: string;
    text: string;
    git_Url: string;
    image_Info: ImageInfo;
    technologies: Tech[];

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.headline = obj && obj.headline || "";
        this.text = obj && obj.text || "";
        this.git_Url = obj && obj.git_Url || "";
        this.image_Info =(obj && obj.image_Info && new ImageInfo(obj.image_Info)) || new ImageInfo();
        this.technologies = obj && obj.technologies && obj.technologies.map((elem: any) => new Tech(elem)) || [];
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

export class Tech {
    _id: string;
    name: string;
    img_Url: string;
    img_Href: string;
    img_Alt: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || "";
        this.name = obj && obj.name || "";
        this.img_Url = obj && obj.img_Url || "";
        this.img_Href = obj && obj.img_Href || "";
        this.img_Alt = obj && obj.img_Alt || "";
    }
}