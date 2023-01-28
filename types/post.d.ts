// define type of post for typescript wordpress rest api
export interface Blogs {
    id:                         number;
    date:                       Date;
    date_gmt:                   Date;
    guid:                       {
        rendered: string;
    }
    modified:                   Date;
    modified_gmt:               Date;
    slug:                       string;
    status:                     string;
    type:                       string;
    link:                       string;
    title:                      {
        rendered: string;
    }
    content:                    {
        rendered: string;
    }
    excerpt:                    {
        rendered: string;
    }
    author:                     number;
    featured_media:             number;
    comment_status:             string;
    ping_status:                string;
    sticky:                     boolean;
    template:                   string;
    format:                     string;
    meta:                       any[];
    categories:                 number[];
    tags:                       number[];
    jetpack_featured_media_url: string;
    amp_enabled:                boolean;
    _links:                     string;
    _embedded:                  any;
}