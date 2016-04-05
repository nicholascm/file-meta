
import * as express from 'express'; 
import * as path from 'path'; 
import * as multer from 'multer'; 

const app = new express(); 
const upload = multer(); 

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '../client'))); 


app.get('/', (req, res) => {
    
    res.sendFile("index.html"); 
    
});
 
app.post('/formUpload', upload.single('image'), (req, res) => {

   res.json({
       "message": responseDialog(req.file.size, req.file.originalname)) 
    });



app.listen(app.get('port'), () => {
    console.log('app is running on port', app.get('port')); 
}); 

function responseDialog(size: number, name: string) : string {
    
    return "This file is "+size+" bytes "+"and is called "+name+" on the user's device.";
}