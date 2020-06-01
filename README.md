# screenshot_api_dev
Uri: localhost:3000/screeshot/[url]/[width]

url: đường dẫn lấy chụp hình màn hình

width: độ rộng màn hình

Sử dụng puppelteer, chụp ảnh màn hình ( fullpage )

Response: image screen shot

### Hướng dẫn cài đặt source code

#### Step 1: Clone source code về
```bash
    https://github.com/ngocquy-allgrow/htmltojson.git
```

### Step 2: Cài đặt node_modules
``` bash
    npm i
```
### Start serer
```bash
    node app.js
```
#### Api chụp màn hình
```bash
    http://localhost:3000/screenshot?url=https://google.com&width=200
```