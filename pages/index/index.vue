<template>
    <AppHeader />
    <!-- 频道模块 -->
    <van-tabs>
        <van-tab
            v-for="item in channelList"
            :key="item.id"
            :title="item.name"
        />
    </van-tabs>
    <!-- 视频列表 -->
    <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="去 bilibili App 看更多"
        @load="onLoad"
    >
        <div class="video-list">
            <AppVideo v-for="item in list" :key="item.bvid" :item="item" />
        </div>
    </van-list>
</template>

<script setup lang="ts">
import type { VideoItem } from '@/types/video'
const loading = ref(false)
const finished = ref(false)
const list = ref<VideoItem[]>([])
// 页码
let page = 1
let pageSize = 20

const { data: channelList } = await useFetch('/api/channel')
const { data: videolList } = await useFetch('/api/video')

const onLoad = () => {
    console.log('11')

    loading.vaue = false
    const data = videolList.value?.slice(
        (page - 1) * pageSize,
        page * pageSize
    ) as VideoItem[]
    list.value.push(...data)
    page++
    if (videolList.value?.length === list.value.length) {
        finished.value = true
    }
}
// 初始化加载 - 主动请求前 20 条数据，用于首屏渲染，方便 SEO 抓取到数据
onLoad()
</script>

<style>
/*  视频列表 */
.video-list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px;
}
</style>
