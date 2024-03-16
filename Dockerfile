# 베이스 이미지 설정
FROM node:18.12.1-alpine

WORKDIR /frontend

# 소스 코드 복사
COPY ./package.json ./

COPY . ./

RUN yarn

CMD ["yarn", "start"]