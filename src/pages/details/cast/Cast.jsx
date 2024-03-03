import React from 'react'
import { useSelector } from 'react-redux'

import './style.scss'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Image'
import avatar from '../../../assets/avatar.png'

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.Home)

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    )
  }
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              const CastName = item.name.replace(' ', '_')
              let imgurl = item.profile_path ? url.profile + item.profile_path : avatar
              return (
                <div key={item.id} className="listItem">
                  <a href={`https://en.wikipedia.org/wiki/${CastName}`}>
                    <div className="profileImg">
                      <Img src={imgurl} />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="character">{item.character}</div>
                  </a>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default Cast
