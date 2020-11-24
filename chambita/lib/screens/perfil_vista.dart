import 'package:chambita/screens/registro_usuario_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:line_awesome_flutter/line_awesome_flutter.dart';

class PerfilVista extends StatelessWidget {
  List tags = [
    'Conductor',
    'Pintor',
    'Computadoras',
    'Limpieza',
    'Fotos',
    'Videos',
    'otros'
  ];
  List categories = ['Categoria1', 'Categoria2', 'Categoria3', 'Categoria4'];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: Icon(Icons.arrow_back_ios),
          elevation: 0,
          backgroundColor: Color(0xFF012F3D),
          actions: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Icon(Icons.more_vert),
            )
          ],
        ),
        body: Container(
          height: double.infinity,
          width: double.infinity,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,

              colors: [
                Color(0xFF012F3D),
                Color(0xFF012F3D),
                Color(0xFF0A4F64),
                Color(0xFF0A4F64),
              ],
              //stops: [0.1, 0.4, 0.6, 0.9],
            ),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              //nombres e info
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(left: 28.0, top: 9),
                    child: CircleAvatar(
                      radius: 35,
                      backgroundImage: AssetImage('assets/logos/frans.jpg'),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 38),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          'Frans Gallegos',
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 28,
                              color: Colors.white),
                        ),
                        Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                Icon(Icons.location_on,
                                    color: Colors.white, size: 17),
                                Padding(
                                  padding: const EdgeInsets.only(left: 8.0),
                                  child: Text('Arequipa',
                                      style: TextStyle(
                                          color: Colors.white,
                                          wordSpacing: 2,
                                          letterSpacing: 4)),
                                )
                              ],
                            ))
                      ],
                    ),
                  )
                ],
              ),

              //info en numero y boton
              Padding(
                padding: const EdgeInsets.only(
                    right: 38.0, left: 38, top: 15, bottom: 12),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text("3/5",
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 25)),
                        Text(
                          'Puntuación',
                          style: TextStyle(color: Colors.white),
                        )
                      ],
                    ),
                    Container(
                      color: Colors.white,
                      width: 0.2,
                      height: 22,
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Text("50%",
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 25)),
                        Text(
                          'Información completada',
                          style: TextStyle(color: Colors.white),
                        )
                      ],
                    ),
                    Container(
                      color: Colors.white,
                      width: 0.2,
                      height: 22,
                    ),
                    Container(
                        padding: EdgeInsets.only(
                            left: 18, right: 18, top: 8, bottom: 8),
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.all(Radius.circular(33)),
                            gradient: LinearGradient(
                                colors: [
                                  Color(0xff6D0EB5),
                                  Color(0xff4059F1),
                                  //Colors.blueAccent
                                ],
                                begin: Alignment.bottomRight,
                                end: Alignment.centerLeft)),
                        child: GestureDetector(
                          onTap: () => Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => RegistroUsuarioScreen(),
                              )),
                          child: Text(
                            'Editar',
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold),
                          ),
                        ))
                  ],
                ),
              ),
              //tags
              Padding(
                padding: const EdgeInsets.only(right: 30, left: 30, top: 5),
                child: Container(
                  height: 44,
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: tags.length,
                    itemBuilder: (BuildContext context, int index) {
                      return Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(33),
                            border: Border.all(color: Colors.white12)),
                        margin: EdgeInsets.only(right: 13),
                        child: Padding(
                          padding: const EdgeInsets.only(
                              top: 11.0, bottom: 5, right: 20, left: 20),
                          child: Text(tags[index],
                              style: TextStyle(color: Colors.white)),
                        ),
                      );
                    },
                  ),
                ),
              ),
              Expanded(
                  child: Container(
                width: double.infinity,
                margin: EdgeInsets.only(top: 15),
                decoration: BoxDecoration(
                    color: Color(0xffEFEFEF),
                    borderRadius:
                        BorderRadius.vertical(top: Radius.circular(34))),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.only(top: 33, right: 25, left: 25),
                      child: Text(
                        'Perfil',
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 33),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.only(right: 25, left: 25),
                      height: 40,
                      child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          itemCount: categories.length,
                          itemBuilder: (BuildContext context, int index) {
                            return Padding(
                              padding: const EdgeInsets.only(right: 17, top: 3),
                              child: (index == 1)
                                  ? Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.start,
                                      children: <Widget>[
                                        Text(categories[index],
                                            style: TextStyle(
                                                color: Colors.grey
                                                    .withOpacity(0.9),
                                                fontSize: 19)),
                                        CircleAvatar(
                                          radius: 2,
                                          backgroundColor: Color(0xff434AE8),
                                        )
                                      ],
                                    )
                                  : Text(categories[index],
                                      style: TextStyle(
                                          color: Colors.grey.withOpacity(0.9),
                                          fontSize: 19)),
                            );
                          }),
                    )
                  ],
                ),
              ))
            ],
          ),
        ));
  }
}
