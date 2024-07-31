const misterious_words = [
	{ word: 'botella', tips: ['se usa con agua', 'puede ser de plástico o vidrio', 'se encuentra en la cocina'] },
	{ word: 'ventana', tips: ['se abre y se cierra', 'permite ver afuera', 'de vidrio'] },
	{ word: 'pantalla', tips: ['parte de la computadora', 'muestra imágenes', 'se usa para ver videos'] },
	{ word: 'espejo', tips: ['refleja imágenes', 'se encuentra en el baño', 'se usa para vernos'] },
	{ word: 'peluche', tips: ['juguete suave', 'se parece a un animal', 'para niños'] },
	{ word: 'biblioteca', tips: ['lugar con muchos libros', 'sitio de estudio', 'público o privado'] },
	{ word: 'reloj', tips: ['da la hora', 'puede ser de pulsera', 'se encuentra en la pared'] },
	{ word: 'sofá', tips: ['se usa para sentarse', 'está en la sala', 'cómodo'] },
	{ word: 'teléfono', tips: ['se usa para llamar', 'móvil o fijo', 'tiene números'] },
	{ word: 'silla', tips: ['se usa para sentarse', 'tiene cuatro patas', 'en la mesa'] },
	{ word: 'lámpara', tips: ['da luz', 'se pone en la mesa', 'puede ser de pie'] },
	{ word: 'mochila', tips: ['se usa para llevar cosas', 'se lleva en la espalda', 'usada por estudiantes'] },
	{ word: 'mantel', tips: ['cubre la mesa', 'se usa en comidas', 'puede ser de tela'] },
	{ word: 'zoológico', tips: ['lugar con animales', 'se visita', 'hay jaulas'] },
	{ word: 'computadora', tips: ['se usa para trabajar', 'tiene teclado', 'conecta a internet'] },
	{ word: 'paraguas', tips: ['protege de la lluvia', 'se abre y se cierra', 'se lleva en la mano'] },
	{ word: 'escritorio', tips: ['mesa de trabajo', 'puede tener cajones', 'se usa para estudiar'] },
	{ word: 'alfombra', tips: ['cubre el suelo', 'puede ser suave', 'decorativa'] },
	{ word: 'auriculares', tips: ['se ponen en los oídos', 'para escuchar música', 'con cable o inalámbricos'] },
	{ word: 'ventilador', tips: ['da aire', 'se usa en verano', 'puede ser de pie o de techo'] },
	{ word: 'avión', tips: ['vuela en el cielo', 'transporte rápido', 'tiene alas'] },
	{ word: 'bicicleta', tips: ['tiene dos ruedas', 'se pedalea', 'transporte ecológico'] },
	{ word: 'lavadora', tips: ['lava la ropa', 'está en el lavadero', 'usa agua y jabón'] },
	{ word: 'cuchara', tips: ['se usa para comer', 'en la mesa', 'para sopas'] },
	{ word: 'cárcel', tips: ['lugar para prisioneros', 'de seguridad', 'con rejas'] },
	{ word: 'maleta', tips: ['se usa para viajar', 'lleva ropa', 'tiene ruedas'] },
	{ word: 'micrófono', tips: ['amplifica la voz', 'se usa en conciertos', 'puede ser inalámbrico'] },
	{ word: 'botiquín', tips: ['para primeros auxilios', 'tiene medicamentos', 'en caso de emergencia'] },
	{ word: 'acuario', tips: ['lugar con peces', 'se llena de agua', 'puede ser grande o pequeño'] },
	{ word: 'batería', tips: ['instrumento musical', 'tiene tambores', 'se toca con baquetas'] },
	{ word: 'aeropuerto', tips: ['lugar donde aterrizan aviones', 'tiene pistas de despegue', 'viajes internacionales'] },
	{ word: 'bibliotecario', tips: ['persona que trabaja en una biblioteca', 'organiza libros', 'ayuda a los lectores'] },
	{ word: 'calendario', tips: ['muestra los días del año', 'se cuelga en la pared', 'tiene meses y semanas'] },
	{ word: 'candidato', tips: ['persona que se postula para un cargo', 'participa en elecciones', 'puede ser político'] },
	{ word: 'carretera', tips: ['camino pavimentado', 'usado por vehículos', 'conecta ciudades'] },
	{ word: 'catedral', tips: ['iglesia principal', 'edificio religioso grande', 'tiene una arquitectura impresionante'] },
	{ word: 'científico', tips: ['persona que realiza investigaciones', 'trabaja en un laboratorio', 'descubre cosas nuevas'] },
	{ word: 'circunstancia', tips: ['situación particular', 'contexto de un evento', 'factor o condición'] },
	{ word: 'comportamiento', tips: ['conducta de una persona', 'cómo actúa', 'observable'] },
	{ word: 'conferencia', tips: ['reunión para discutir un tema', 'presentación ante un público', 'puede ser académica'] },
	{ word: 'corresponsal', tips: ['reportero que informa desde otro lugar', 'trabaja para un medio de comunicación', 'puede estar en el extranjero'] },
	{ word: 'descubrimiento', tips: ['algo que se encuentra por primera vez', 'puede ser científico', 'revela información nueva'] },
	{ word: 'diccionario', tips: ['libro de definiciones', 'explica palabras', 'puede ser bilingüe'] },
	{ word: 'documental', tips: ['programa de televisión o película', 'informa sobre un tema real', 'puede ser educativo'] },
	{ word: 'embarcación', tips: ['vehículo que navega en el agua', 'puede ser un barco', 'usado para transporte marítimo'] },
	{ word: 'entusiasmo', tips: ['gran interés o emoción', 'sentimiento positivo', 'energía y motivación'] },
	{ word: 'entretenimiento', tips: ['actividad que divierte', 'puede ser un juego, película o espectáculo', 'distracción'] },
	{ word: 'espectáculo', tips: ['presentación pública', 'puede ser teatral o musical', 'divierte a la audiencia'] },
	{ word: 'exposición', tips: ['muestra de arte o información', 'se realiza en galerías o museos', 'presentación al público'] },
	{ word: 'geografía', tips: ['estudio de la tierra y sus características', 'incluye montañas, ríos y continentes', 'ciencia natural'] },
	{ word: 'hospedaje', tips: ['alojamiento temporal', 'puede ser en un hotel', 'para viajeros'] },
	{ word: 'imaginación', tips: ['capacidad de crear imágenes mentales', 'creatividad', 'fantasía'] },
	{ word: 'investigación', tips: ['proceso de estudio detallado', 'para descubrir información', 'científica o académica'] },
	{ word: 'literatura', tips: ['conjunto de obras escritas', 'puede ser narrativa, poesía o teatro', 'arte de escribir'] },
	{ word: 'notificación', tips: ['aviso o comunicación oficial', 'información importante', 'puede ser por escrito'] },
	{ word: 'observatorio', tips: ['lugar para observar el cielo', 'usado por astrónomos', 'tiene telescopios'] },
	{ word: 'orquesta', tips: ['grupo de músicos', 'toca música clásica', 'dirigida por un director'] },
	{ word: 'parlamento', tips: ['institución legislativa', 'donde se debaten leyes', 'compuesto por representantes'] },
	{ word: 'periodismo', tips: ['profesión de informar al público', 'se realiza en medios de comunicación', 'puede ser escrito, televisivo o digital'] },
	{ word: 'publicación', tips: ['obra que se imprime o distribuye', 'puede ser un libro, revista o artículo', 'difunde información'] },
	{ word: 'arquitectura', tips: ['arte de diseñar edificios', 'se estudia en la universidad', 'puede ser moderna o clásica'] },
	{ word: 'biografía', tips: ['historia de la vida de una persona', 'escrita por otra persona', 'puede ser un libro'] },
	{ word: 'canciller', tips: ['líder del gobierno en algunos países', 'trabaja en diplomacia', 'título usado en Alemania'] },
	{ word: 'cirujano', tips: ['médico que realiza operaciones', 'trabaja en un hospital', 'especializado en cirugía'] },
	{ word: 'climatología', tips: ['estudio del clima', 'ciencia atmosférica', 'incluye el cambio climático'] },
	{ word: 'coincidencia', tips: ['evento que ocurre al mismo tiempo', 'no planeado', 'sorpresivo'] },
	{ word: 'colaboración', tips: ['trabajo en conjunto', 'entre dos o más personas', 'para un objetivo común'] },
	{ word: 'competencia', tips: ['rivalidad entre individuos o grupos', 'puede ser deportiva', 'busca un ganador'] },
	{ word: 'conservatorio', tips: ['institución de enseñanza musical', 'formación en música clásica', 'puede tener orquesta'] },
	{ word: 'contaminación', tips: ['presencia de sustancias dañinas en el ambiente', 'afecta el aire, agua o suelo', 'causada por actividades humanas'] },
	{ word: 'conversación', tips: ['intercambio de ideas hablado', 'entre dos o más personas', 'puede ser informal o formal'] },
	{ word: 'coreografía', tips: ['arte de crear danzas', 'se utiliza en ballet y otros bailes', 'movimientos coordinados'] },
	{ word: 'cotidiano', tips: ['ocurre todos los días', 'parte de la rutina', 'habitual'] },
	{ word: 'crucigrama', tips: ['juego de palabras', 'se resuelve en un papel', 'tiene pistas horizontales y verticales'] },
	{ word: 'democracia', tips: ['sistema de gobierno', 'basado en la participación ciudadana', 'elecciones libres'] },
	{ word: 'desafortunado', tips: ['persona con mala suerte', 'experimenta infortunios', 'sin éxito'] },
	{ word: 'desayuno', tips: ['primera comida del día', 'se toma por la mañana', 'puede incluir café y pan'] },
	{ word: 'dificultad', tips: ['obstáculo o problema', 'requiere esfuerzo para superar', 'puede ser físico o mental'] },
	{ word: 'dinamismo', tips: ['energía y movimiento', 'característica de algo activo', 'puede ser una persona o situación'] },
	{ word: 'economista', tips: ['experto en economía', 'analiza mercados y finanzas', 'trabaja en bancos o gobiernos'] },
	{ word: 'ecosistema', tips: ['conjunto de organismos y su entorno', 'interacción entre seres vivos y ambiente', 'puede ser terrestre o acuático'] },
	{ word: 'electricidad', tips: ['forma de energía', 'presente en los hogares', 'alimentada por centrales eléctricas'] },
	{ word: 'embajador', tips: ['representante diplomático de un país', 'vive en otro país', 'trabaja en una embajada'] },
	{ word: 'entrenamiento', tips: ['preparación física o mental', 'para mejorar habilidades', 'puede ser deportivo'] },
	{ word: 'espectacular', tips: ['muy impresionante', 'causa admiración', 'puede ser un evento o vista'] },
	{ word: 'experiencia', tips: ['conocimiento adquirido con el tiempo', 'se obtiene a través de la práctica', 'puede ser laboral o personal'] },
	{ word: 'fotografía', tips: ['arte de capturar imágenes', 'utiliza una cámara', 'puede ser digital o analógica'] },
	{ word: 'gastronomía', tips: ['arte de preparar y disfrutar la comida', 'puede ser regional o internacional', 'incluye técnicas culinarias'] },
	{ word: 'hospitalidad', tips: ['actitud de recibir bien a los visitantes', 'amabilidad y generosidad', 'practicada en hoteles y hogares'] },
	{ word: 'imposibilidad', tips: ['algo que no se puede realizar', 'fuera del alcance', 'incapaz de ser logrado'] }
];

const alphabet = [
	'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 'h',
	'i', 'í', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'ó',
	'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
	'z'
];

function shuffleArray(source) {
	if (source instanceof Array) {
		const array = [...source];
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	throw new Error('source must be an instance of array');
}

function handleLetterCliked(context, letter) {
	const word = misterious_words[context.word_index].word;

	if (word.includes(letter)) {
		context.guessed_right.add(letter);

		let finished = true;
		for (let ch of word) {
			if (!context.guessed_right.has(ch)) {
				finished = false;
				break;
			}
		}

		if (finished) {
			context.success = true;
			// reset(context);
		}
	} else {
		context.guessed_wrong.add(letter);
	}
}

function reset(context) {
	context.word_index = Math.floor(Math.random() * misterious_words.length);
	context.guessed_right = new Set([]);
	context.guessed_wrong = new Set([]);
	context.success = false;
}

document.addEventListener('alpine:init', () => {
	Alpine.store('context', {
		alphabet,

		success: false,

		word_index: Math.floor(Math.random() * misterious_words.length),
		guessed_right: new Set([]),
		guessed_wrong: new Set([]),
	});
});
