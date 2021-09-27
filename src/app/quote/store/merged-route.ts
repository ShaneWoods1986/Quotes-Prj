import { Params, Data } from '@angular/router';

export interface MergedRoute {
    url: string;
    queryParams: Params;
    params: Params;
    data: Data;
}