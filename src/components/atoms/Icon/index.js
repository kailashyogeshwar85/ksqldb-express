import StreamSvg from 'assets/svgs/stream.svg';

const Svg = (type) => {
  switch (type) {
    case 'stream':
      return (
        StreamSvg
      );
    default:
      return null;
  }
}

export default Svg;
