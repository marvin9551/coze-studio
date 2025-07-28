# Coze Studio本地开发指南

Coze Studio是一个基于微服务架构和领域驱动设计（DDD）的AI智能体开发平台。本文档将指导您如何在本地搭建开发环境，以便学习和开发这个框架。

## 目录
- [后端开发环境搭建](#后端开发环境搭建)
- [前端开发环境搭建](#前端开发环境搭建)
- [项目结构说明](#项目结构说明)
- [开发工作流程](#开发工作流程)
- [调试和日志](#调试和日志)
- [常见问题](#常见问题)

## 后端开发环境搭建

### 1. 环境要求

- Go 1.24+
- Docker和Docker Compose
- MySQL 8.0+
- Redis
- 其他依赖服务（Elasticsearch、MinIO等）

### 2. 初始化开发环境

```bash
# 克隆项目代码
git clone https://github.com/coze-dev/coze-studio.git
cd coze-studio

# 复制环境配置文件
cd docker
cp .env.example .env
```

### 3. 启动依赖服务

Coze Studio依赖多个中间件服务，可以使用Docker Compose启动：

```bash
# 启动所有依赖服务（不包括主应用）
make middleware

# 或者使用docker-compose命令
docker-compose --profile middleware up -d
```

这将启动MySQL、Redis、Elasticsearch、MinIO等服务。

### 4. 配置数据库

使用Atlas工具管理数据库迁移：

```bash
# 安装Atlas工具
# 在Mac上:
brew install ariga/tap/atlas

# 在Linux上:
curl -sSf https://atlasgo.sh | sh -s -- --community

# 导出环境变量
export ATLAS_URL="mysql://coze:coze123@localhost:3306/opencoze?charset=utf8mb4&parseTime=True"

# 应用数据库迁移
atlas schema apply -u $ATLAS_URL --to file://docker/atlas/opencoze_latest_schema.hcl
```

### 5. 配置模型服务

在开始开发之前，需要配置至少一个模型服务：

```bash
# 复制模型配置模板
cp backend/conf/model/template/model_template_ark_doubao-seed-1.6.yaml backend/conf/model/ark_doubao-seed-1.6.yaml

# 编辑配置文件，填写API Key等信息
nano backend/conf/model/ark_doubao-seed-1.6.yaml
```

### 6. 构建和运行后端服务

```bash
# 构建并启动后端服务
make debug

# 或者分别执行
make server
```

这将编译Go代码并启动后端服务，默认监听8888端口。

## 前端开发环境搭建

### 1. 环境要求

- Node.js 16.13.0+
- Rush.js包管理器

### 2. 安装Rush.js

```bash
# 全局安装Rush.js
npm install -g @microsoft/rush

# 或者使用pnpm
pnpm install -g @microsoft/rush
```

### 3. 安装前端依赖

```bash
# 进入项目根目录
cd coze-studio

# 安装所有依赖
rush update
```

### 4. 启动前端开发服务器

```bash
# 进入前端应用目录
cd frontend/apps/coze-studio

# 启动开发服务器
rushx dev
```

这将启动前端开发服务器，默认监听3000端口。

## 项目结构说明

### 后端结构

```
backend/
├── api/                 # API接口层
│   ├── handler/         # 请求处理器
│   ├── middleware/      # 中间件
│   └── model/           # 数据模型
├── application/         # 应用服务层
├── domain/              # 领域模型层
├── infra/               # 基础设施层
├── crossdomain/         # 跨域服务层
├── conf/                # 配置文件
└── main.go              # 程序入口
```

### 前端结构

```
frontend/
├── apps/                # 应用程序
│   └── coze-studio/     # 主应用
├── packages/            # 共享包
├── config/              # 配置文件
└── infra/               # 基础设施
```

## 开发工作流程

### 1. 创建新功能

根据DDD架构，开发新功能时应遵循以下步骤：

1. 在[domain/](file:///Users/marvin/sourceCode/coze-studio/domain)目录下定义领域模型
2. 在[application/](file:///Users/marvin/sourceCode/coze-studio/backend/application)目录下实现应用服务
3. 在[api/](file:///Users/marvin/sourceCode/coze-studio/backend/api)目录下创建API接口
4. 更新[crossdomain/](file:///Users/marvin/sourceCode/coze-studio/backend/crossdomain)中的跨域服务（如需要）

### 2. 数据库迁移

当需要修改数据库结构时：

```bash
# 生成迁移文件
atlas migrate diff update --env local --to $ATLAS_URL

# 检查迁移状态
atlas migrate status --url $ATLAS_URL --dir "file://migrations"

# 应用迁移
atlas migrate apply --url $ATLAS_URL --dir "file://migrations"
```

### 3. 编写测试

为新功能编写测试：

```bash
# 运行后端测试
cd backend
go test ./...

# 运行前端测试
cd frontend/apps/coze-studio
rushx test
```

## 调试和日志

### 后端调试

```bash
# 查看服务日志
docker-compose logs -f

# 查看特定服务日志
docker-compose logs -f coze-server
```

### 前端调试

前端开发服务器支持热重载，代码更改后会自动刷新浏览器。

## 常见问题

1. **依赖服务无法启动**
   - 检查Docker是否正常运行
   - 确认端口没有被占用
   - 查看具体服务的日志输出

2. **数据库连接失败**
   - 检查数据库服务是否启动
   - 确认数据库连接参数是否正确
   - 检查防火墙设置

3. **前端无法连接后端API**
   - 确认后端服务是否正常运行
   - 检查API地址配置
   - 查看浏览器控制台错误信息

通过以上步骤，您就可以在本地搭建Coze Studio的开发环境，并开始学习和开发这个框架了。建议从阅读现有代码开始，理解项目的整体架构和设计模式，然后再逐步添加新功能。