export abstract class Entity {
  private id: string;
  public get _id(): string {
    return this.id;
  }
  public set _id(value: string) {
    this.id = value;
  }

  private _createDate: Date;
  public get createDate(): Date {
    return this._createDate;
  }
  public set createDate(value: Date) {
    this._createDate = value;
  }

  private _updateAt: Date;
  public get updateAt(): Date {
    return this._updateAt;
  }
  public set updateAt(value: Date) {
    this._updateAt = value;
  }

  constructor() {}
}
