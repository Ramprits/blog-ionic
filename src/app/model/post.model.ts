import { Entity } from './entity.model';

export class PostModel extends Entity {
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  constructor() {
    super();
  }
}
