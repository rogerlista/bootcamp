import styled from 'styled-components'

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const IssueFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  button {
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    margin-right: 5px;
    padding: 5px;
    width: 80px;

    &:hover {
      background: #5f4ba0;
    }

    &:nth-child(${props => props.active}) {
      background: #463287;
    }
  }
`

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    border-radius: 50%;
    margin-top: 20px;
    width: 120px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
        line-height: 1.4;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  button {
    border-radius: 4px;
    font-size: 11px;
    margin-left: 5px;
    padding: 4px;
    width: 60px;

    &:hover {
      background: #eee;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.35;
    }
  }
`
