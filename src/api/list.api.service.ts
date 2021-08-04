export enum ListApiServiceType {
  TEMPLATE = 'http://localhost:3000/templates',
  DOCUMENT = 'http://localhost:3000/documents'
}

export default class ListApiService {

  readonly STORAGE_KEY: string;

  constructor(key: string) {
    this.STORAGE_KEY = key;
  }

  public insertOne(title: string, blocks: any[]): Promise<any> {
    return fetch(this.STORAGE_KEY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        blocks
      })
    }).then((response) => {
      return response.json();
    })
  }

  public findOne(id: string): Promise<any> {
    return fetch(this.STORAGE_KEY + '/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  public findAll(): Promise<any[]> {
    return fetch(this.STORAGE_KEY, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  public removeOne(id: string): Promise<any[]> {
    return fetch(this.STORAGE_KEY + '/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  public updateOne(id: string, data: any): Promise<any> {
    return fetch(this.STORAGE_KEY + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());
  }
}
