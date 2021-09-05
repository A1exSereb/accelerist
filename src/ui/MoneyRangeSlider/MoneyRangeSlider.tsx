/* eslint-disable react/prop-types */
import * as React from 'react';
import { getTrackBackground, Range, useThumbOverlap } from 'react-range';
import { RangeSliderProps } from 'ui/types';
import { IProps as InjectedProps } from 'react-range/lib/types';

const STEP = 0.1;
const MIN = 0;
const MAX = 100;
const COLORS = ['#E8E8E8', '#2BAEE0', '#E8E8E8', '#E8E8E8'];

function ThumbLabel({
  rangeRef,
  values,
  index,
}: {
  rangeRef: Range | null;
  values: number[];
  index: number;
}) {
  const [labelValue, labelStyle] = useThumbOverlap(
    rangeRef,
    values,
    index,
    0.1,
    ' - ',
    (value) => `$ ${value}M`
  );
  return (
    <div
      data-label={index}
      style={{
        display: 'block',
        color: '#121212',
        fontWeight: 'bold',
        fontSize: '14px',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
        padding: '7px 17px',
        borderRadius: '6px',
        border: '1px solid #CAF0FF',
        backgroundColor: '#fff',
        whiteSpace: 'nowrap',
        ...(labelStyle as React.CSSProperties),
      }}
    >
      {labelValue}
    </div>
  );
}

type Props = RangeSliderProps & Partial<InjectedProps>;

const MoneyRangeSlider: React.FC<Props> = ({
  values = [],
  step = STEP,
  min = MIN,
  max = MAX,
  onChange,
}: Props) => {
  const rangeRef: any = React.useRef<Range>();
  const Thumb = ({ props, index }: any) => (
    <div {...props}>
      <ThumbLabel rangeRef={rangeRef.current} values={values} index={index} />
      <div />
    </div>
  );
  const Track = ({ props, children }: any) => (
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{
        ...props.style,
        height: '36px',
        display: 'flex',
        width: '100%',
      }}
    >
      <div
        ref={props.ref}
        style={{
          height: '2px',
          width: '100%',
          borderRadius: '4px',
          background: getTrackBackground({
            values: values,
            colors: COLORS,
            min: min,
            max: max,
          }),
          alignSelf: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
  return (
    <Range
      ref={rangeRef}
      values={values}
      onChange={(values) => {
        onChange?.(values);
        console.log(values);
      }}
      renderThumb={Thumb}
      renderTrack={Track}
      step={step}
      min={min}
      max={max}
    />
  );
};

export default MoneyRangeSlider;
