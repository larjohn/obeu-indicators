import {Dimension} from './dimension';
import {Serializable} from './iserializeable';
import {GenericProperty} from "./genericProperty";
/**
 * Created by larjo on 16/7/2016.
 */

export class  Attribute extends GenericProperty implements Serializable<Attribute> {


  ref: string;
  datatype: string;
  label: string;
  orig_attribute: string;
  dimension: Dimension;

  serialize(input: Attribute): Object {
    return this;
  }
  deserialize(input: any): Attribute {

    this.ref = input.ref;
    this.datatype = input.datatype;
    this.label = input.label;
    this.orig_attribute = input.orig_attribute;


    return this;
  }
  constructor() {
    super();
  }


  public get fullLabel(): string{
    return (this.dimension ? this.dimension.label : '') + '→' + this.label;
  }

  public get shortRef(): string{
    const replace = '^(' + this.dimension.ref + '\.)';
    const re = new RegExp(replace, 'g');
    return (this.dimension ? this.ref.replace(re, '') : '') ;
  }


}
