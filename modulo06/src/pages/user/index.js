import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ActivityIndicator } from 'react-native'

import api from '../../services/api'

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles'

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  })

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  }

  state = {
    stars: [],
    loading: false,
    page: 1,
  }

  async componentDidMount() {
    const { navigation } = this.props
    const user = navigation.getParam('user')

    try {
      this.setState({ loading: true })

      const response = await api.get(`/users/${user.login}/starred`)

      this.setState({ stars: response.data })
    } catch (error) {
      console.tron.log('Error', error)
    } finally {
      this.setState({ loading: false })
    }
  }

  loadMore = async () => {
    const { stars } = this.state
    const { navigation } = this.props
    const user = navigation.getParam('user')
    const page = this.state.page + 1

    try {
      this.setState({ loading: true })

      const response = await api.get(
        `/users/${user.login}/starred?page=${page}`
      )

      const data = stars.concat(response.data)

      this.setState({ stars: data, page })
    } catch (error) {
      console.tron.log('Error', error)
    } finally {
      this.setState({ loading: false })
    }
  }

  renderFooter = () => {
    if (this.state.loading) {
      return <ActivityIndicator color="#7159c1" size="large" />
    }

    return null
  }

  render() {
    const { navigation } = this.props
    const { stars, loading, page } = this.state
    const user = navigation.getParam('user')

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading && page === 1 ? (
          <ActivityIndicator color="#7159c1" size="large" />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
          />
        )}
      </Container>
    )
  }
}
