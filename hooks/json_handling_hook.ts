import { binding, before, after } from 'cucumber-tsflow';

@binding()
export class JsonHandlingHook {
  @before("tagName")
  public logMessageToConsoleBeforeTestRun(): void {
    console.log('Before test message.');
  }

  @after("tagName")
  public logMessageToConsoleAfterTestRun(): void {
    console.log('After test message.');
  }
}