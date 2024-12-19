import BannerImg from '../../assets/images/banner.png';
import styled from 'styled-components';

const BannerIMG = styled.img`
  width: 100%;
`

export const Banner = () => {
  return(
    <>
    <header>
      <BannerIMG src={BannerImg}/>
    </header>
    </>
  )
}

