/**
 * CREA UN PROGRAMA QUE CALCULE LOS DIAS DESDE QUE NACISTES
 */
import 'dart:core';

int dias_vivos(DateTime fechaN) =>
DateTime.now().difference(fechaN).inDays;

void main(){

  final fechaN = DateTime(1998,06,27);
  final dias = dias_vivos(fechaN);
  print(dias);
}


