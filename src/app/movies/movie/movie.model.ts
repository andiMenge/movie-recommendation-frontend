export class Movie {
  public original_title: string;
  public imdb_id: string;
  public release_date: string;
  public is_highlight: boolean;
  public image_url: string;
  public created_date: string;

  constructor(original_title: string, imdb_id: string, release_date: string, is_highlight: boolean, image_url: string, created_date: string) {
    this.original_title = original_title;
    this.imdb_id = imdb_id;
    this.release_date = release_date;
    this.is_highlight = is_highlight;
    this.image_url = image_url;
    this.created_date = created_date;
  }
}
