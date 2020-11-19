import React from 'react'
import { Checkbox, Row, Col } from 'antd'
import './style.less'

interface IPicture {
  id: string
  name: string
  url: string
}

interface IProps {
  pictures: IPicture[]
  value: string[]
  onChange: (val: string[]) => void
}

function PictureSelect(props: IProps) {
  const { pictures, value, onChange } = props

  const handelChange = (id: string) => (e: any) => {
    if (e.target.checked) {
      onChange([...value, id])
    } else {
      onChange(value.filter(item => item !== id))
    }
  }

  const onCheckAllChange = (e: any) => {
    if (e.target.checked) {
      onChange(pictures.map(item => item.id))
    } else {
      onChange([])
    }
  }

  return (
    <div className="pictureSelect">
      <Row>
        {pictures.map(item => {
          return (
            <Col key={item.id} span={3}>
              <div className="pictureBox">
                <label htmlFor={item.id}>
                  <Checkbox
                    id={item.id}
                    className="checkbox"
                    onChange={handelChange(item.id)}
                    checked={value.includes(item.id)}
                  />
                  <img src={item.url} alt={item.name} />
                </label>
                {item.name}
              </div>
            </Col>
          )
        })}
      </Row>
      <Row>
        <Checkbox
          onChange={onCheckAllChange}
          indeterminate={value.length > 0 && value.length < pictures.length}
          checked={value.length > 0 && value.length === pictures.length}
        >
          {value.length > 0 ? `已选中${value.length}个文件` : '全选'}
        </Checkbox>
      </Row>
    </div>
  )
}

export default PictureSelect
