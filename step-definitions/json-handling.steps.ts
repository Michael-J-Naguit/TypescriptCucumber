import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import { SerializationHelper } from "../helpers/SerializationHelper";
import { Profile_Model } from "../models/Profile_Model";

@binding()
export class JSONHandlingSteps {
 
  private foo: Profile_Model;
  private json: string;

  @given(/JSON String/)
  public givenJSONString() {
    this.json = '{"name": "John Doe", "address": "Silverdale, Auckland"}';   
  }

  @when(/Serialize JSON to Profile Model/)
  public whenSerializeJSONtoProfileModel() {
    this.foo = SerializationHelper.toInstance(new Profile_Model(), this.json);
  }

  @then(/Validate Name and Address are correct/)
  public thenValidateNameandAddressAreCorrect() {  
    assert.equal(this.foo.name, "John Doe");
    assert.equal(this.foo.address, "Silverdale, Auckland");
  }
}