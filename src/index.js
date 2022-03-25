import * as $ from 'jquery'
import Post from '@models/Post'
import './babel'
import WebPackLogo from './assets/webpack-seeklogo.com.svg'
import './styles/styles.css'
import './styles/scss.scss'
const post = new Post('Webpack post title', WebPackLogo)

$('pre').addClass('code').html(post.toString())