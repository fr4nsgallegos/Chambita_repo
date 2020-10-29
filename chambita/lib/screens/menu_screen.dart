import 'package:chambita/screens/buscar_trabajo.dart';
import 'package:chambita/screens/home_screen.dart';
import 'package:chambita/screens/mis_trabajos_empleado.dart';
import 'package:chambita/screens/perfil_vista.dart';
import 'package:flutter/material.dart';
import 'package:curved_navigation_bar/curved_navigation_bar.dart';

class MenuScreen extends StatefulWidget {
  @override
  _menuScreenState createState() => _menuScreenState();
}

class _menuScreenState extends State<MenuScreen> {
  int _page = 0;
  GlobalKey _bottomNavigationKey = GlobalKey();

  //creando las paginas
  final HomeScreen _homeScreen = new HomeScreen();
  final MisTrabajosEmpleado _misTrabajosEmpleado = new MisTrabajosEmpleado();
  final BuscarTrabajo _buscarTrabajo = new BuscarTrabajo();
  final PerfilVista _perfilVista = new PerfilVista();

  Widget _showPage = new MisTrabajosEmpleado();

  Widget _pageChooser(int page) {
    switch (page) {
      case 0:
        return _homeScreen;
      case 1:
        return _misTrabajosEmpleado;
      case 2:
        return _buscarTrabajo;
      case 3:
        return _perfilVista;
        break;
      default:
        return new Container(
          child: new Center(
              child: new Text(
            'No hay pagina seleccionada',
            style: new TextStyle(fontSize: 30),
          )),
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        bottomNavigationBar: CurvedNavigationBar(
          key: _bottomNavigationKey,
          index: _page,
          height: 50.0,
          items: <Widget>[
            Icon(Icons.home, size: 30),
            Icon(Icons.list, size: 30),
            Icon(Icons.search, size: 30),
            //Icon(Icons.work, size: 30),
            Icon(Icons.perm_identity, size: 30),
          ],
          color: Colors.white,
          buttonBackgroundColor: Colors.white,
          backgroundColor: Color(0xFF0A4F64),
          animationCurve: Curves.easeInOut,
          animationDuration: Duration(milliseconds: 600),
          onTap: (int tappedIndex) {
            setState(() {
              _showPage = _pageChooser(tappedIndex);
            });
          },
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
            child: Center(
              child: _showPage,
            )));
  }
}
