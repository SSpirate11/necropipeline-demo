const { processData, filterData, sortData } = require('../src/data-processor');

describe('Data Processor', () => {
  test('processes data correctly', () => {
    const data = [{ id: 1 }, { id: 2 }];
    const result = processData(data);
    expect(result).toEqual([
      { id: 1, processed: true },
      { id: 2, processed: true }
    ]);
  });

  test('filters data correctly', () => {
    const data = [{ id: 1, active: true }, { id: 2, active: false }];
    const result = filterData(data, item => item.active);
    expect(result).toHaveLength(1);
  });
});
