const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/";
const dbName = "diwa";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log("koneksi tidak berhasil");
    }

    //pilih database
    const db = client.db(dbName);

    // MENAMBAHKAN 1 DATA KE COLLECTIONS MAHASISWA
    db.collection("mahasiswa").insertOne(
        {
            nama: "walidah",
            email: "walidah@gmail.com",
        },
        (error, result) => {
            if (error) {
                return console.log("gagal memuat data");
            }
            console.log(result);
        }
    );

    // menambahkan lebih dari 1 data
    // db.collection("mahasiswa").insertMany(
    //     [
    //         {
    //             nama: "bayu",
    //             email: "bayu@gmail.com",
    //         },
    //         {
    //             nama: "hendra",
    //             email: "hendra@gmail.com",
    //         },
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log("gagal memuat data");
    //         }
    //         console.log(result);
    //     }
    // );

    // // menampilkan semua data pada collections mahasiswa

    // console.log(
    //     db
    //         .collection("mahasiswa")
    //         .find()
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );

    // menampilkan data berdasarkan kriteria

    // db.collection("mahasiswa")
    //     .find({ _id: ObjectId("646ec3a7c7fa7609645a0ee4") })
    //     .toArray((error, result) => {
    //         console.log(result);
    //     });

    //mengubah data berdasarkan id
    // const updatePromise = db.collection("mahasiswa").update(
    //     {
    //         _id: ObjectId("646ec3a7c7fa7609645a0ee4"),
    //     },
    //     {
    //         $set: {
    //             nama: "diwayyyyyyyy",
    //         },
    //     }
    // );
    //  updatePromise.then((result) => console.log(result)).catch((error) => console.log(error));

    //MENGUBAH LEBIH DARI 1 DATA
    // db.collection("mahasiswa").updateMany(
    //     {
    //         nama: "diki wahyudi",
    //     },
    //     {
    //         $set: {
    //             nama: "diki doang",
    //         },
    //     }
    // );
    // menghapus 1 data
    // db.collection("mahasiswa")
    //     .deleteOne({
    //         nama: "walidah",
    //     })
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log(error));

    // menghapus lebih dari 1 data
    // db.collection("mahasiswa")
    //     .deleteMany({
    //         nama: "diki doang",
    //     })
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log(error));

    // db.collection("mahasiswa")
    //     .deleteMany()
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log(error));
});
