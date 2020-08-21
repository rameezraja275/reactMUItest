import ChaloopsMediumOTF from '../../font/9719beab12b9e44b85432bb843ad1d55.ttf';

const ChaloopsMedium = {
    fontFamily: 'Chaloops W00 Reg',
    src: `url(${ChaloopsMediumOTF}) format('ttf')`,
  };

export default {
    '@global': {
        '@font-face': [ChaloopsMedium],
    }
}