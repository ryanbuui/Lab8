const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath function returns correct volume icon path', () => {
  test('Passes in 0 to return path of iconLevel 0', () => {
    expect(formatVolumeIconPath(0)).toMatch('0');
  });

  test('Passes in 33 to return path of iconLevel 1', () => {
    expect(formatVolumeIconPath(33)).toMatch('1');
  });

  test('Passes in 66 to return path of iconLevel 2', () => {
    expect(formatVolumeIconPath(66)).toMatch('2');
  });

  test('Passes in 100 to return path of iconLevel 3', () => {
    expect(formatVolumeIconPath(100)).toMatch('3');
  });
});