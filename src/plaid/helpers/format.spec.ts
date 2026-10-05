import {Format} from './format';

describe('Format', () => {
  describe('date', () => {
    it('formats a single date', () => {
      expect(Format.date(new Date(2026, 9, 5))).toBe('Oct 5, 2026');
    });
  });

  describe('dateRange', () => {
    it('formats a single-day range as one date', () => {
      const day = new Date(2026, 9, 5);
      expect(Format.dateRange({start: day, end: new Date(day)})).toBe('Oct 5, 2026');
    });

    it('formats a range within one month', () => {
      expect(Format.dateRange({start: new Date(2026, 9, 4), end: new Date(2026, 9, 10)})).toBe('Oct 4 - 10, 2026');
    });

    it('formats a range across months', () => {
      expect(Format.dateRange({start: new Date(2026, 8, 27), end: new Date(2026, 9, 3)})).toBe('Sep 27 - Oct 3, 2026');
    });

    it('formats a range across years', () => {
      expect(Format.dateRange({start: new Date(2026, 11, 27), end: new Date(2027, 0, 2)}))
        .toBe('Dec 27, \'26 - Jan 2, \'27');
    });
  });

  describe('timePeriod', () => {
    it('formats hours, minutes and seconds', () => {
      expect(Format.timePeriod(3600 + 23 * 60 + 5)).toBe('1h 23m 5s');
    });

    it('omits zero parts', () => {
      expect(Format.timePeriod(7200)).toBe('2h ');
      expect(Format.timePeriod(90 * 60)).toBe('1h 30m ');
      expect(Format.timePeriod(45)).toBe('45s');
    });

    it('returns an empty string for zero', () => {
      expect(Format.timePeriod(0)).toBe('');
    });
  });
});
