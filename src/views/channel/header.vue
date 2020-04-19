<template>
    <header>
        <h2>美妆个护频道</h2>
        <div class="btn">
            <button class="home">
                <van-icon name="home-o" />
            </button>
            <button class="login">登录</button>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixin.scss";
header{
    height: 38px;
    display: flex;
    padding-right: 10px;
    align-items: center;
    @include border_1px('bottom');
    h2{
        flex: 1;
        text-align: center;
        font-size: 14px;
    }
    .btn{
        color: #E31436;
        font-size: 12px;
        margin-top: 4px;
        .home{
            font-size: 18px;
            vertical-align: middle;
            margin-right: 6px;
        }
        .login{
            width: 32px;
            line-height: 17px;
            border: 1px solid #E31436;
            border-radius: 3px;
            background: #fff;
        }
    }
}
</style>