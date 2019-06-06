import React from 'react'
import './pentagram.less'
import cutImgMan from '@/assets/images/developers/cutImg-man.jpg'
import HeaderImg from '../HeaderImg/HeaderImg'

export const pentagramIcon = () => {
  return (
    <div className="c-pentagram-icon">
      <div className="shadow-box" />
      <svg viewBox="0 0 1092 1024" version="1.1" p-id="1155" width="213.28125" height="200">
        <defs>
          <style type="text/css" />
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFCAE" />
            <stop offset="100%" stopColor="#F9DC4B" />
          </linearGradient>
        </defs>
        <path
          // tslint:disable-next-line:max-line-length
          d="M1080.270639 453.733718c-77.161903 88.184889-214.58473 234.425705-214.58473 234.425705s22.045972 160.203798 35.273956 269.70066c5.878993 55.85193-37.478953 80.101899-85.980892 58.054927-92.594883-43.357945-233.690706-110.96686-265.290665-126.399841-32.334959 14.697981-174.165781 81.571897-267.495663 124.928843-49.236938 21.310973-92.594883-2.204997-87.45089-58.054927 12.492984-109.496862 35.273956-268.965661 35.273955-268.965661S91.123885 541.917607 13.227983 453.732718c-27.924965-32.334959-9.551988-77.896902 44.827944-85.980891 111.701859-19.841975 284.397642-51.441935 284.397642-51.441935s94.798881-163.143794 154.324805-263.086669C529.848333-7.7717 552.629304-0.422709 556.304299 1.047289c10.287987 2.939996 26.455967 15.431981 47.032941 52.175934 58.789926 99.943874 152.119808 263.087669 152.119808 263.087669s170.491785 31.60096 280.723647 51.441935c53.645932 8.08399 71.28291 54.380931 44.092944 85.980891z"
          fill="url(#grad1)"
          p-id="1156"
        />
      </svg>
    </div>
  )
}

interface Iprops {
  top: string
  left: string
  img?: any
  onClick?: () => void
}

const pentagram = (props: Iprops) => {
  const { top, left, img, onClick } = props
  return (
    <div className="c-pentagram" style={{ top, left }} onClick={onClick}>
      {img ? (
        <HeaderImg img={img} />
      ) : (
        <HeaderImg img={cutImgMan}>
          <div className="vacancy">虚位</div>
        </HeaderImg>
      )}

      <div className="pentagram-box">{pentagramIcon()}</div>
    </div>
  )
}

export default pentagram
