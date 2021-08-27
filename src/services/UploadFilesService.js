import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append('file', file);

        return http.post('/api/v1/audios', formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress
        });
    }

    getText() {
        return http.get('/api/v1/texts', {
            headers: {
                'Content-Type': 'application/json'
            }}
        )
    }
}

export default new UploadFilesService();