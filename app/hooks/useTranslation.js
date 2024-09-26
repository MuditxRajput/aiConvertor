const useTranslation =async(text)=>{
    try {
        console.log("here");
        let convertData = text;
        const lang = ['RU','SA','EN'];
        for(const targetLang of lang)
        {
            const resposne = await fetch("https://api-free.deepl.com/v2/translate",{
                method:"POST",
                body:JSON.stringify({
                    "text": convertData,
                    "target_lang": targetLang,
                }),
                headers:{
                   "Authorization": `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
                    "Content-Type": "application/json"   
                }
            });
            const val = await resposne.json();
            if(val.translation && val.translation.length>0)
            {text
                convertData = val.translation[0].text;
            }
            else {
                throw new Error("Translation failed");
            }
        }
        return convertData;
    } catch (error) {
        console.log('Error during translation:', error);
        return null;
    }
}
export default useTranslation;