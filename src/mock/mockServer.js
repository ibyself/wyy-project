import Mock from 'mockjs'
import homeData from './homeData.json'
import categoryNavList from './categoryNavList.json'
import categoryList from './category.json'

Mock.mock('/api/getHomeData',{code:0,...homeData})
Mock.mock('/api/categoryNavList',{code:0,...categoryNavList})
Mock.mock('/api/categoryList',{code:0,data:categoryList})