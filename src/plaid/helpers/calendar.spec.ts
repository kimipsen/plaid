import {Calendar} from './calendar';

describe('Calendar', () => {
  describe('getDaysOfMonth', () => {
    it('splits a month into full weeks starting on Sunday', () => {
      // October 2026 starts on a Thursday and ends on a Saturday
      const weeks = Calendar.getDaysOfMonth(new Date(2026, 9, 1));

      expect(weeks.length).toBe(5);
      weeks.forEach(week => expect(week.length).toBe(7));
      expect(weeks[0][0]).toEqual(new Date(2026, 8, 27));
      expect(weeks[0][4]).toEqual(new Date(2026, 9, 1));
      expect(weeks[4][6]).toEqual(new Date(2026, 9, 31));
    });

    it('adds a trailing week when the month spills over', () => {
      // August 2026 starts on a Saturday, so it spans six rows
      const weeks = Calendar.getDaysOfMonth(new Date(2026, 7, 1));

      expect(weeks.length).toBe(6);
      expect(weeks[0][6]).toEqual(new Date(2026, 7, 1));
      expect(weeks[5][1]).toEqual(new Date(2026, 7, 31));
      expect(weeks[5][6]).toEqual(new Date(2026, 8, 5));
    });

    it('handles February in a leap year', () => {
      const weeks = Calendar.getDaysOfMonth(new Date(2028, 1, 1));
      const days = weeks.flat().filter(d => d.getMonth() === 1);

      expect(days.length).toBe(29);
    });
  });

  describe('copyDateRange', () => {
    it('returns an equal range that does not share Date instances', () => {
      const range = {start: new Date(2026, 9, 4), end: new Date(2026, 9, 10)};
      const copy = Calendar.copyDateRange(range);

      expect(copy).toEqual(range);
      expect(copy.start).not.toBe(range.start);
      expect(copy.end).not.toBe(range.end);
    });
  });
});
