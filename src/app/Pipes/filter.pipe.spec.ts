import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe = new FilterPipe;
  let result;

  it('Transform Returns Array Without a Object', () => {
    result = pipe.transform([], "1234");
    
    expect(result).toEqual([]);
  });

  it('Transform Returns Array with a Object 01', () => {
    result = pipe.transform([{name: '1234'}], "1234");

    expect(result).toEqual([{name: '1234'}]);
  });

  it('Transform Returns Array with Objects 02', () => {
    result = pipe.transform([{name: '1234'}, {name: '1246567'}, {name: '14'}], "1");

    expect(result).toEqual([{name: '1234'}, {name: '1246567'}, {name: '14'}]);
  });

  it('Transform Returns Array with Objects 03', () => {
    result = pipe.transform([{name: '1234'}, {name: '1246567'}, {name: '14'}, {name: '2222'}], "4");

    expect(result).toEqual([{name: '1234'}, {name: '1246567'}, {name: '14'}]);
  });

  it('Transform Returns Empty Array without any Object 04', () => {
    result = pipe.transform([{name: '1234'}, {name: '1246567'}, {name: '14'}, {name: '2222'}], "9");

    expect(result).toEqual([]);
  });

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
