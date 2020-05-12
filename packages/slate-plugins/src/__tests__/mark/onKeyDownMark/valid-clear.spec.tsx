/** @jsx jsx */

import { jsx } from '__test-utils__/jsx';
import * as isHotkey from 'is-hotkey';
import { onKeyDownMark } from 'mark';
import { MARK_BOLD } from 'marks/bold';
import { MARK_ITALIC } from 'marks/italic';

const input = (
  <editor>
    <p>
      t<txt italic>est</txt>
    </p>
    <selection>
      <anchor path={[0, 1]} offset={0} />
      <focus path={[0, 1]} offset={3} />
    </selection>
  </editor>
) as any;

const event = new KeyboardEvent('keydown');

const output = (
  <editor>
    <p>
      t<txt bold>est</txt>
    </p>
    <selection>
      <anchor path={[0, 1]} offset={0} />
      <focus path={[0, 1]} offset={3} />
    </selection>
  </editor>
) as any;

it('should be', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);

  onKeyDownMark({ hotkey: 'ctrl+b', mark: MARK_BOLD, clear: MARK_ITALIC })(
    event,
    input
  );
  expect(input.children).toEqual(output.children);
  expect(input.selection).toEqual(output.selection);
});
