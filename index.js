const EYES = [
	[
		50, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 80, 82, 40, 63, 81, 21, 19, 0, 40, 51, 65, 26, 14, 21, 70,
		47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 72, 31, 5, 24, 3, 43, 59, 67, 33, 49, 41, 60, 21, 26, 30, 5, 25, 20, 71, 11, 74, 56, 4, 74, 19, 71, 4, 51, 41, 43,
		80, 72, 54, 63, 79, 81, 15, 16, 44, 31, 30, 12, 33, 57, 28, 13, 64, 43, 48,
	],
	[
		80, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 29, 11, 30, 52, 81, 21, 19, 0, 25, 26, 54, 20, 14, 21, 70,
		47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 44, 26, 59, 77, 64, 43, 79, 28, 72, 64, 1, 30, 73, 23, 67, 6, 33, 25, 64, 81, 68, 46, 17, 36, 13, 17, 21, 68, 13, 9,
		46, 67, 57, 34, 62, 82, 15, 10, 73, 62, 2, 11, 65, 72, 37, 44, 10, 43, 68, 62, 9, 34, 18,
	],
	[
		36, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 69, 76, 52, 9, 48, 66, 80, 22, 64, 57, 40, 49, 78, 3, 16,
		56, 19, 47, 40, 80, 6, 13, 64, 29, 49, 64, 63, 6, 49, 31, 13, 16, 10, 45, 24, 26, 77, 10, 60, 81, 61, 34, 54, 70, 21, 15, 4, 66, 77, 42, 37, 30, 22, 0, 11,
		41, 72, 57, 20, 23, 57, 65, 41, 23, 18, 72, 42, 5, 3, 26, 78, 8, 5, 54, 45, 77, 25, 64, 61, 16, 44, 54, 51, 20, 63, 25, 11, 26, 45, 53, 60, 38, 34,
	],
	[
		76, 66, 5, 49, 75, 54, 69, 46, 32, 1, 42, 60, 26, 48, 50, 80, 32, 24, 55, 61, 47, 12, 21, 12, 49, 54, 34, 25, 36, 15, 56, 55, 20, 9, 8, 62, 13, 82, 9, 44,
		29, 60, 53, 82, 42, 80, 5, 43, 71, 3, 80, 77, 47, 78, 34, 25, 62, 18, 10, 49, 62, 64, 52, 81, 11, 66, 62, 13, 47, 17, 52, 70, 26, 23, 32, 31, 64, 23, 35,
		32, 50, 6, 1, 25, 8, 37, 47, 43, 26, 76, 65, 68, 80, 17, 7, 45, 63, 14, 53, 63, 60, 16,
	],
	[
		63, 66, 5, 49, 75, 54, 2, 60, 29, 40, 78, 47, 60, 75, 67, 71, 60, 2, 65, 7, 47, 14, 45, 74, 59, 41, 80, 13, 60, 13, 81, 22, 35, 50, 40, 39, 2, 59, 48, 31,
		76, 2, 80, 75, 1, 56, 67, 11, 21, 8, 40, 65, 45, 75, 55, 39, 60, 42, 13, 3, 22, 57, 2, 6, 58, 9, 70, 1, 58, 56, 63, 68, 25, 79, 7, 20, 19, 64, 2, 66, 73,
		30, 71, 16, 12, 30, 65, 37, 20, 13, 22, 63, 18, 46, 64, 59, 41, 81, 82, 22, 78, 36, 47, 17, 4, 6, 17, 5, 36, 79, 63, 1, 64, 69, 15, 43, 4, 58, 56, 31, 14,
		64, 58, 18, 44, 78, 69, 1, 0, 46, 20, 71, 73, 25, 35, 8, 24,
	],
	[
		34, 66, 5, 49, 75, 54, 23, 74, 11, 13, 28, 26, 19, 48, 67, 57, 37, 60, 34, 28, 74, 10, 17, 32, 11, 18, 19, 43, 19, 81, 42, 4, 62, 9, 46, 49, 32, 51, 76, 58,
		4, 43, 47, 17, 67, 79, 21, 32, 44, 16, 30, 37, 26, 28, 41, 68, 57, 34, 51, 10, 69, 70, 8, 6, 46, 43, 18, 39, 47, 43, 15, 13, 33, 30, 35, 62, 37, 0, 37, 5,
		38, 55, 37, 13, 40, 25, 9, 21, 11, 64, 5, 79, 42, 68, 11, 71, 11, 48, 3, 67, 61, 40, 22, 14, 35, 50, 61, 39, 11, 2, 66, 49, 51, 53, 17, 73, 36, 75, 74, 54,
		24, 30, 54, 70,
	],
	[
		27, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 77, 44, 38, 1, 18, 28, 76, 4, 34, 60, 63, 58, 80, 17, 54, 79, 75, 48, 54, 55,
		19, 62, 64, 14, 47, 51, 70, 75, 5, 11, 47, 45, 58, 68, 69, 79, 25, 38, 45, 73, 47, 68, 50, 34, 45, 78, 26, 79, 57, 4, 56, 22, 60, 18, 75, 43, 60, 59, 67,
		63, 42, 49, 33, 40, 65, 79, 77, 7, 3, 26, 62, 31, 78, 26, 57, 69, 40, 4, 23, 26, 13, 67, 42, 38, 72, 11, 39, 65, 60, 25, 6, 80, 66, 68, 77, 59, 78, 19,
	],
	[
		77, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 60, 21, 80, 1, 72, 55, 16, 82, 35, 57, 19, 1, 66, 18, 27, 39, 17, 74, 81, 39,
		14, 78, 0, 25, 65, 43, 66, 64, 38, 81, 23, 24, 50, 57, 30, 71, 75, 26, 68, 54, 57, 56, 50, 71, 73, 14, 21, 8, 32, 26, 63, 5, 37, 19, 43, 66, 47, 53, 34, 66,
		23, 73, 31, 54, 38, 77, 67, 11, 63, 79, 6, 22, 21, 51, 69, 74, 21, 5, 17, 67, 37, 29, 21, 60, 14, 82, 44, 30, 4, 20, 42, 35, 1, 31, 54, 46, 20, 40, 30,
	],
	[
		33, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 33, 21, 59, 44, 18, 28, 76, 59, 34, 60, 63, 79, 27, 12, 54, 5, 49, 48, 54, 55,
		52, 62, 72, 69, 10, 57, 22, 58, 48, 67, 53, 7, 34, 32, 30, 31, 19, 26, 8, 34, 46, 7, 30, 71, 55, 34, 75, 54, 9, 6, 60, 5, 23, 25, 45, 42, 80, 25, 12, 22,
		76, 20, 51, 62, 21, 40, 9, 41, 10, 44, 73, 8, 33, 70, 73, 6, 31, 21, 72, 5, 40, 61, 51, 42, 66, 64, 74, 61, 25, 63, 42, 24, 41,
	],
];

class Styles {
	static Disabled = { bg: null, fg: null };
	static StandardDark = { bg: null, fg: "#ffffff" };
	static StandardBright = { bg: "#77818d", fg: "#494c4d" };

	static getIndexed(index, modifier = null) {
		const hueOffset = 140;
		const hue = (hueOffset + index * 137.508) % 360;

		let saturation = 30;
		let lightness = 50;
		if (modifier == "darken") {
			lightness = Math.max(0, lightness - 15);
			saturation = Math.min(100, saturation - 5);
		}

		const bg = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		const fg = "#ffffff";
		return { bg, fg };
	}

	static getGreenGradual(pct) {
		pct = Math.max(0, Math.min(1, pct));
		const hue = 60 + pct * 60;
		const saturation = 20 + pct * 10;
		const lightness = 65 - pct * 20;
		const bg = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		const fg = lightness > 50 ? "#2b2b2b" : "#ffffff";
		return { bg, fg };
	}

	static getRedToGreen(pct) {
		pct = Math.max(0, Math.min(1, pct));

		// (0 -> 120) is (red -> yellow -> green)
		const hue = 120 * pct;
		const saturation = 80;
		const lightness = 50;

		const bg = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		const fg = "#000000";
		return { bg, fg };
	}

	static getPatternIndexed(symbol) {
		if (symbol == ".") {
			return Styles.StandardBright;
		} else {
			let value = symbol.charCodeAt(0) - 64;
			return Styles.getIndexed(value);
		}
	}
}

class IdTracker {
	constructor(start) {
		this.next = start;
		this.available = [];
	}

	get() {
		if (this.available.length > 0) {
			return this.available.pop();
		}
		return this.next++;
	}

	give(value) {
		this.available.push(value);
	}
}

class MyEvent {
	constructor() {
		this.listeners = [];
	}

	listen(cb) {
		this.listeners.push(cb);
	}

	trigger(...data) {
		for (var l of this.listeners) {
			l(...data);
		}
	}
}

const HighlightMode = Object.fromEntries(["None", "Values", "SharedCT", "Isomorphs", "SharedPT"].map((k, i) => [k, i]));

function hashString(str) {
	let h = 0;
	for (let i = 0; i < str.length; i++) {
		h = (h << 5) - h + str.charCodeAt(i); // h * 31 + c
		h |= 0; // 32-bit
	}
	return h >>> 0; // unsigned
}

function hashInts(list) {
	let h = 0;
	for (const v of list) h ^= v;
	return h >>> 0;
}

function hashStrings(list) {
	let h = 0;
	for (const s of list) {
		h ^= hashString(s);
	}
	return h >>> 0;
}

function choose(n, k) {
	// n choose k binomial coefficient
	if (k > n / 2) k = n - k;
	let res = 1;
	for (let i = 1; i <= k; i++) {
		res *= (n - i + 1) / i;
	}
	return res;
}

function getCorePatternIndices(pattern) {
	let start = 0;
	let end = pattern.length - 1;
	while (start <= end && pattern[start] === ".") start++;
	while (end >= start && pattern[end] === ".") end--;
	return [start, end];
}

function getCorePattern(pattern) {
	let [start, end] = getCorePatternIndices(pattern);
	return pattern.slice(start, end + 1);
}

function calculateIsomorphs(messages, maxLength = 30, toExtend = true) {
	// pattern: { instances: [ [message, letter], ... ], score: 0 }
	let isomorphs = {};

	// For each length to try, check every letter on every message
	for (let len = 2; len <= maxLength; len++) {
		for (let msgIndex = 0; msgIndex < messages.length; msgIndex++) {
			let msg = messages[msgIndex];
			for (let i = 0; i < msg.length - len + 1; i++) {
				let instance = msg.slice(i, i + len);

				// Optionally filter on start and end values having a repeat within the range
				if (!toExtend) {
					const start = instance[0];
					const end = instance[instance.length - 1];
					if (start != end) {
						let foundStart = false;
						let foundEnd = false;
						for (let i = 1; i < instance.length - 1; i++) {
							if (instance[i] == start) foundStart = true;
							if (instance[i] == end) foundEnd = true;
							if (foundStart && foundEnd) break;
						}
						if (!(foundStart && foundEnd)) continue;
					}
				}

				// Get pattern of letters based on their repeat structure
				let letterMapping = {};
				let letterCounts = {};
				for (let letter of instance) {
					letterCounts[letter] = (letterCounts[letter] || 0) + 1;
				}

				let pattern = "";
				for (let letter of instance) {
					if (letterCounts[letter] > 1 && !letterMapping[letter]) {
						letterMapping[letter] = String.fromCharCode(65 + Object.keys(letterMapping).length);
					}
					pattern += letterMapping[letter] || ".";
				}

				// Now can track the instance of this isomorph to the pattern lookup
				if (Object.keys(letterMapping).length > 0) {
					if (!isomorphs[pattern]) isomorphs[pattern] = { instances: [] };
					isomorphs[pattern].instances.push([msgIndex, i]);
					isomorphs[pattern].repeats = Object.values(letterCounts)
						.filter((v) => v > 1)
						.reduce((acc, v) => acc + (v - 1), 0);
				}
			}
		}
	}

	// If we are extending we want to merge all patterns by their core pattern and take the largest
	if (toExtend) {
		const uniquePatterns = {};
		for (let pattern in isomorphs) {
			// Use count in the key as larger extensions may have less instances
			let corePattern = getCorePattern(pattern);
			const counts = isomorphs[pattern].instances.length;
			const key = corePattern + ":" + counts;

			if (!uniquePatterns[key] || pattern.length > uniquePatterns[key].maxLength) {
				uniquePatterns[key] = { pattern, maxLength: pattern.length, counts };
			}
		}

		// Now grab the encompassing isomorphs for each core isomorph
		const mergedIsomorphs = {};
		for (let key in uniquePatterns) {
			const p = uniquePatterns[key].pattern;
			mergedIsomorphs[p] = isomorphs[p];
		}

		isomorphs = mergedIsomorphs;
	}

	// Calculate score for each isomorph group
	const alphabetSize = new Set(messages.flat()).size;
	const totalMessageLength = messages.reduce((acc, msg) => acc + msg.length, 0);

	for (let pattern in isomorphs) {
		const isomorph = isomorphs[pattern];
		const isomorphLength = pattern.length;
		const isomorphInstances = isomorph.instances.length;
		if (isomorphInstances === 1) continue;

		// Calculate how many repeats are inthe isomorph
		let isomorphLettersSeen = new Set();
		let internalRepeatCount = 0;
		for (let letter of pattern) {
			if (letter === ".") continue;
			if (!isomorphLettersSeen.has(letter)) {
				isomorphLettersSeen.add(letter);
			} else {
				internalRepeatCount++;
			}
		}

		if (internalRepeatCount === 1) {
			isomorph.score = 0;
			continue;
		}

		const isoProbability = 1 / Math.pow(alphabetSize, internalRepeatCount);

		// Assume binomially distributed occurrences across the length of the message
		// Calculate p(occurrences >= isomorphInstances)
		const trialCount = totalMessageLength - messages.length * isomorphLength;
		let totalProbability = 0.0;
		let lastProbability = 0.0;
		for (let occurrences = isomorphInstances; occurrences < isomorphInstances + 30; occurrences++) {
			totalProbability += choose(trialCount, occurrences) * Math.pow(1 - isoProbability, trialCount - occurrences) * Math.pow(isoProbability, occurrences);

			// Stop when we reach the precision limit
			if (totalProbability == lastProbability) break;
			lastProbability = totalProbability;
		}
		isomorph.score = -Math.log10(totalProbability);
	}

	return isomorphs;
}

function calculateAllomorphs(messages) {
	let allomorphs = [];

	// Setup allomorph data
	for (let _ in messages) {
		allomorphs.push({});
	}

	// For each repeat (l0 -> l1)
	for (let msg0Index = 0; msg0Index < messages.length; msg0Index++) {
		let msg0 = messages[msg0Index];

		for (let l0Index = 0; l0Index < msg0.length; l0Index++) {
			let l0 = msg0[l0Index];

			for (let l1Index = l0Index + 1; l1Index < msg0.length; l1Index++) {
				let l1 = msg0[l1Index];

				if (l0 == l1) {
					const gap = l1Index - l0Index;
					allomorphs[msg0Index][l0Index] = { length: gap, instances: [] };

					// For each other message in same column  (l2 -> l3) with same length
					for (let msg1Index = 0; msg1Index < messages.length; msg1Index++) {
						let msg1 = messages[msg1Index];
						if (msg0Index == msg1Index) continue;

						let l2Index = l0Index;
						let l2 = msg1[l2Index];

						if (l2Index + gap < msg1.length) {
							let l3Index = l2Index + gap;
							let l3 = msg1[l3Index];

							// Same message and overlapping is useless information
							if (msg0Index == msg1Index && ((l0Index < l2Index && l1Index > l2Index) || (l0Index < l3Index && l1Index > l3Index))) {
								continue;
							}

							// If (l0 == l1) and (l2 != l3) then this is an allomorph
							if (l2 != l3) {
								allomorphs[msg0Index][l0Index].instances.push({ msg: msg1Index, letter: l2Index });
							}
						}
					}
				}
			}
		}
	}

	return allomorphs;
}

function calculateShared(messages) {
	// We want to calculate shared columns between messages
	// But ensure the assigned values are consistent row-wise
	groups = {};
	let output = [];
	let ids = new IdTracker(1);

	for (let _ in messages) output.push([]);

	// Go through column at a time
	let col = 0;
	while (true) {
		// Group up messages by shared value
		let foundGroups = {};
		for (let msgIndex = 0; msgIndex < messages.length; msgIndex++) {
			let msg = messages[msgIndex];
			if (msg.length <= col) continue;
			if (!foundGroups[msg[col]]) foundGroups[msg[col]] = [];
			foundGroups[msg[col]].push(msgIndex);
		}

		// Gone past the end of all messages
		if (Object.keys(foundGroups).length == 0) break;

		// Try and assign each group a value
		for (let groupKey in foundGroups) {
			let group = foundGroups[groupKey];

			// Group is shared so we need a value > 0
			if (group.length > 1) {
				let id = null;

				// Try and reuse any existing ID if possible
				if (col > 0) {
					for (let msgIndex of group) {
						if (output[msgIndex][col - 1] != 0) {
							id = output[msgIndex][col - 1];
							break;
						}
					}
				}

				// Otherwise grab next ID
				if (id == null) id = ids.get();

				// Now assign for this group
				for (let msgIndex of group) {
					output[msgIndex].push(id);
				}
			}

			// Otherwise use 0
			else if (group.length == 1) {
				output[group[0]].push(0);
			}
		}

		col++;
	}

	return output;
}

// --------------------------------------------------------------------

class IsomorphGeneratorPanel {
	constructor(app) {
		this.app = app;
		this.isomorphs = {};
		this.onGenerate = new MyEvent();
		this.isVisible = false;

		this.containerElement = document.getElementById("isomorph-generator");
		this.generateButtonElement = document.getElementById("isomorph-generator-generate-button");
		this.inputMaxLengthElement = document.getElementById("isomorph-generator-input-max-length");
		this.inputMinValuesElement = document.getElementById("isomorph-generator-input-min-values");
		this.inputSharedSectionsElement = document.getElementById("isomorph-generator-input-shared-sections");
		this.inputExtendElement = document.getElementById("isomorph-generator-input-extend");

		this.maxLength = parseInt(this.inputMaxLengthElement.value);
		this.minValues = parseInt(this.inputMinValuesElement.value);
		this.sharedSections = this.inputSharedSectionsElement.checked;
		this.toExtend = this.inputExtendElement.checked;

		this.containerElement.addEventListener("keypress", (evt) => {
			if (evt.keyCode === 13) {
				evt.preventDefault();
				this.generate();
			}
		});

		this.generateButtonElement.onclick = () => this.generate();
	}

	async generate() {
		this.toggleGenerateButtonSpinner(true);

		this.maxLength = parseInt(this.inputMaxLengthElement.value);
		this.minValues = parseInt(this.inputMinValuesElement.value);
		this.sharedSections = this.inputSharedSectionsElement.checked;
		this.toExtend = this.inputExtendElement.checked;

		// Calculate and filter isomorphs
		this.isomorphs = calculateIsomorphs(this.app.messages, this.maxLength, this.toExtend);
		for (let pattern in this.isomorphs) {
			let letterSet = new Set(pattern.split("").filter((char) => char !== "."));

			// At least the minimum repeats
			if (letterSet.size < this.minValues) {
				delete this.isomorphs[pattern];
				continue;
			}

			// And no shared sections (>1 unique instances)
			if (!this.sharedSections && this.isomorphs[pattern].instances.length > 1) {
				let sequenceSet = new Set();
				for (let instance of this.isomorphs[pattern].instances) {
					const instanceList = this.app.messages[instance[0]].slice(instance[1], instance[1] + pattern.length);
					const instanceString = instanceList.join(",");
					sequenceSet.add(instanceString);
				}
				if (sequenceSet.size < 2) {
					delete this.isomorphs[pattern];
					continue;
				}
			}
		}

		// And finally filter for > 1 instances again
		for (let pattern in this.isomorphs) {
			if (this.isomorphs[pattern].instances.length === 1) {
				delete this.isomorphs[pattern];
			}
		}

		this.toggleGenerateButtonSpinner(false);
		this.onGenerate.trigger(this.isomorphs);
	}

	toggleGenerateButtonSpinner(toggle) {
		this.generateButtonElement.innerHTML = toggle ? "<div class='spinner'></div>" : "<div class='label'>Generate</div>";
	}

	setVisible(isVisible) {
		this.isVisible = isVisible;
		this.containerElement.style.display = isVisible ? "block" : "none";
	}
}

class SharedPTConfigPanel {
	constructor(app) {
		this.app = app;
		this.containerElement = document.getElementById("shared-pt-config");
		this.selectAllButtonElement = document.getElementById("shared-pt-config-select-all-button");
		this.deselectAllButtonElement = document.getElementById("shared-pt-config-deselect-all-button");
		this.showSeperatedElement = document.getElementById("shared-pt-config-show-seperated");
		this.isVisible = false;

		this.selectAllButtonElement.onclick = () => this.app.sharedPTInspector.selectAllIsomorphs();
		this.deselectAllButtonElement.onclick = () => this.app.sharedPTInspector.deselectAllIsomorphs();
		this.showSeperatedElement.onchange = (e) => this.app.sharedPTInspector.setShowSeperated(e.target.checked);
	}

	setVisible(isVisible) {
		this.isVisible = isVisible;
		this.containerElement.style.display = isVisible ? "block" : "none";
	}
}

class IsomorphInspectorPanel {
	constructor(app, generator) {
		this.app = app;
		this.generator = generator;
		this.isomorphDisplays = {};
		this.selectedPattern = null;
		this.sortedIsomorphs = [];
		this.isVisible = false;
		this.selectedPosition = null;

		this.containerElement = document.getElementById("isomorphs-inspector");
		this.isomorphListElement = document.getElementById("isomorphs-inspector-list");
		this.isomorphListInfoElement = document.getElementById("isomorphs-inspector-list-info");
		this.selectionElement = document.getElementById("isomorphs-inspector-selection");
		this.selectionInfoElement = document.getElementById("isomorphs-inspector-selection-info");
		this.selectionListElement = document.getElementById("isomorphs-inspector-selection-list");

		this.generator.onGenerate.listen(() => this.recreateIsomorphElements());

		this.app.onShowAsciiChanged.listen(() => {
			this.updateSelectedPatterns();
		});

		this.app.onLetterClick.listen((msg, letter) => {
			if (!this.isVisible) return;
			this.selectLetter([msg, letter]);
		});
	}

	recreateIsomorphElements() {
		this.selectIsomorph(null);
		this.isomorphDisplays = {};

		if (Object.keys(this.generator.isomorphs).length == 0) {
			this.isomorphListElement.innerHTML = "<div class='empty'>No isomorphs...</div>";
		} else {
			this.sortedIsomorphs = Object.keys(this.generator.isomorphs).sort((a, b) => this.generator.isomorphs[b].score - this.generator.isomorphs[a].score);
			this.isomorphListElement.innerHTML = "";

			// Create an element for each isomorph with info and pattern
			for (let pattern of this.sortedIsomorphs) {
				let isomorphDisplay = {};

				isomorphDisplay.element = document.createElement("div");
				isomorphDisplay.element.classList.add("isomorph");

				isomorphDisplay.patternElement = document.createElement("div");
				isomorphDisplay.patternElement.classList.add("pattern");
				isomorphDisplay.patternElement.textContent = pattern;

				isomorphDisplay.labelElement = document.createElement("div");
				isomorphDisplay.labelElement.classList.add("label");
				isomorphDisplay.labelElement.textContent = this.generator.isomorphs[pattern].instances.length.toString();

				isomorphDisplay.scoreElement = document.createElement("div");
				isomorphDisplay.scoreElement.classList.add("score");
				isomorphDisplay.scoreElement.textContent = this.generator.isomorphs[pattern].score.toFixed(2);

				isomorphDisplay.element.appendChild(isomorphDisplay.patternElement);
				isomorphDisplay.element.appendChild(isomorphDisplay.labelElement);
				isomorphDisplay.element.appendChild(isomorphDisplay.scoreElement);
				isomorphDisplay.element.onclick = () => this.selectIsomorph(pattern);

				this.isomorphListElement.appendChild(isomorphDisplay.element);
				this.isomorphDisplays[pattern] = isomorphDisplay;
			}
		}

		// Setup the info for the list
		this.isomorphListInfoElement.innerHTML = "";

		let infoElement1 = document.createElement("div");
		infoElement1.textContent = "Total patterns: " + this.sortedIsomorphs.length;
		this.isomorphListInfoElement.appendChild(infoElement1);

		let infoElement2 = document.createElement("div");
		let totalInstances = Object.values(this.generator.isomorphs).reduce((acc, val) => acc + val.instances.length, 0);
		infoElement2.textContent = "Total instances: " + totalInstances;
		this.isomorphListInfoElement.appendChild(infoElement2);
	}

	selectIsomorph(pattern) {
		if (!this.isVisible) return;

		// Remove old isomorph highlighting
		if (this.selectedPattern != null) {
			if (this.isomorphDisplays[this.selectedPattern] != null) {
				this.isomorphDisplays[this.selectedPattern].element.classList.remove("selected");
			}
		}

		// Toggling current isomorph so just deselect
		if (this.selectedPattern == pattern) {
			this.selectedPattern = null;
			this.app.highlightMessagesUniform(Styles.StandardDark);
			this.updateSelectedPatterns();
			return;
		}

		this.selectedPattern = pattern;

		// Selecting a new isomorph so highlight it and keep track of DOM position
		if (this.selectedPattern != null) {
			this.app.highlightMessagesUniform(Styles.Disabled);
			this.isomorphDisplays[this.selectedPattern].element.classList.add("selected");
			for (let instance of this.generator.isomorphs[this.selectedPattern].instances) {
				for (let i = 0; i < pattern.length; i++) {
					const style = Styles.getPatternIndexed(pattern[i]);
					this.app.setLetterStyle(instance[0], instance[1] + i, { ...style, highlighted: true });
				}
			}
		} else {
			this.app.highlightMessagesUniform(Styles.StandardDark);
		}

		this.updateSelectedPatterns();
	}

	selectLetter(position) {
		// Remove outline from old position
		if (this.selectedPosition != null) {
			this.app.messageDisplays[this.selectedPosition[0]].letters[this.selectedPosition[1]].classList.toggle("outlined", false);
		}

		// Either toggle or replace with new position
		if (this.selectedPosition != null && position != null && this.selectedPosition[0] == position[0] && this.selectedPosition[1] == position[1]) {
			this.selectedPosition = null;
		} else {
			this.selectedPosition = position;
			if (this.selectedPosition != null) {
				this.app.messageDisplays[this.selectedPosition[0]].letters[this.selectedPosition[1]].classList.toggle("outlined", true);
			}
		}

		// Not selecting anything so enable all isomorphs
		if (this.selectedPosition == null) {
			for (let pattern in this.isomorphDisplays) {
				this.isomorphDisplays[pattern].element.style.display = "flex";
			}
			return;
		}

		// Filter visible isormorphs to only those including the position
		for (let pattern in this.isomorphDisplays) {
			let included = false;
			for (let i = 0; i < this.generator.isomorphs[pattern].instances.length; i++) {
				const instance = this.generator.isomorphs[pattern].instances[i];
				if (instance[0] == this.selectedPosition[0] && instance[1] < this.selectedPosition[1] && instance[1] + pattern.length > this.selectedPosition[1]) {
					included = true;
					break;
				}
			}

			this.isomorphDisplays[pattern].element.style.display = included ? "flex" : "none";
		}
	}

	updateSelectedPatterns() {
		if (this.selectedPattern == null) {
			this.selectionElement.style.display = "none";
			return;
		}

		this.selectionListElement.innerHTML = "";
		this.selectionElement.style.display = "flex";

		// Create a selectable element for each instance
		const isomorph = this.generator.isomorphs[this.selectedPattern];
		for (let instance of isomorph.instances) {
			const selectionMessageElement = document.createElement("div");
			selectionMessageElement.classList.toggle("selection-message");
			this.selectionListElement.appendChild(selectionMessageElement);

			// Create the indices info text first
			const selectionMessageIndicesElement = document.createElement("div");
			selectionMessageIndicesElement.classList.toggle("selection-message-indices");
			selectionMessageIndicesElement.innerHTML = `message ${instance[0]} (${instance[1]} - ${instance[1] + this.selectedPattern.length - 1})`;
			selectionMessageElement.appendChild(selectionMessageIndicesElement);

			// Then an element for each letter
			for (let i = 0; i < this.selectedPattern.length; i++) {
				const value = this.app.messages[instance[0]][instance[1] + i];
				const style = Styles.getPatternIndexed(this.selectedPattern[i]);
				let letterElement = document.createElement("div");
				letterElement.classList.toggle("selection-letter");
				letterElement.textContent = this.app.showAscii ? String.fromCharCode(value + 32) : value;
				letterElement.style.backgroundColor = style.bg;
				letterElement.style.color = style.fg;
				letterElement.classList.toggle("highlighted");
				selectionMessageElement.appendChild(letterElement);
			}

			selectionMessageElement.onclick = (e) => {
				e.preventDefault();
				const element = this.app.messageDisplays[instance[0]].letters[instance[1]];
				this.app.scrollTo(element);
			};
		}

		// Setup the info for the selection

		this.selectionInfoElement.innerHTML = `
			<div>Length: ${this.selectedPattern.length}</div>
			<div>Repeats: ${isomorph.repeats}</div>
			<div>Instances: ${isomorph.instances.length}</div>
			<div>Score: ${isomorph.score.toFixed(2)}</div>
		`;
	}

	setVisible(isVisible) {
		this.isVisible = isVisible;
		this.containerElement.style.display = isVisible ? "flex" : "none";
		this.selectLetter(null);

		if (isVisible) {
			// Re-highlight existing isomorph
			if (this.selectedPattern != null) {
				const pattern = this.selectedPattern;
				this.selectedPattern = null;
				this.selectIsomorph(pattern);
			} else {
				this.app.highlightMessagesUniform(Styles.StandardDark);
			}
		}
		this.app.messageListElement.classList.toggle("clickable-letters", isVisible);
	}
}

class SharedPTInspectorPanel {
	constructor(app, generator) {
		this.app = app;
		this.generator = generator;
		this.isomorphDisplays = {};
		this.selectedPatterns = {};
		this.sortedIsomorphs = [];
		this.isVisible = false;
		this.selectedPosition = null;
		this.showSeperated = this.app.sharedPTConfig.showSeperatedElement.checked;

		this.containerElement = document.getElementById("shared-pt-inspector");
		this.isomorphListElement = document.getElementById("shared-pt-inspector-list");
		this.isomorphListInfoElement = document.getElementById("shared-pt-inspector-list-info");

		this.generator.onGenerate.listen(() => this.recreateIsomorphElements());

		this.app.onLetterClick.listen((msg, letter) => {
			if (!this.isVisible) return;
			this.selectLetter([msg, letter]);
		});
	}

	recreateIsomorphElements() {
		this.selectLetter(null);
		this.selectedPatterns = {};
		this.isomorphDisplays = {};

		if (Object.keys(this.generator.isomorphs).length == 0) {
			this.isomorphListElement.innerHTML = "<div class='empty'>No isomorphs...</div>";
		} else {
			this.sortedIsomorphs = Object.keys(this.generator.isomorphs).sort((a, b) => this.generator.isomorphs[b].score - this.generator.isomorphs[a].score);
			this.isomorphListElement.innerHTML = "";

			// Create an element for each isomorph with info and pattern
			for (let pattern of this.sortedIsomorphs) {
				let isomorphDisplay = {};

				isomorphDisplay.element = document.createElement("div");
				isomorphDisplay.element.classList.add("isomorph");

				isomorphDisplay.patternElement = document.createElement("div");
				isomorphDisplay.patternElement.classList.add("pattern");
				isomorphDisplay.patternElement.textContent = pattern;

				isomorphDisplay.labelElement = document.createElement("div");
				isomorphDisplay.labelElement.classList.add("label");
				isomorphDisplay.labelElement.textContent = this.generator.isomorphs[pattern].instances.length.toString();

				isomorphDisplay.scoreElement = document.createElement("div");
				isomorphDisplay.scoreElement.classList.add("score");
				isomorphDisplay.scoreElement.textContent = this.generator.isomorphs[pattern].score.toFixed(2);

				isomorphDisplay.element.appendChild(isomorphDisplay.patternElement);
				isomorphDisplay.element.appendChild(isomorphDisplay.labelElement);
				isomorphDisplay.element.appendChild(isomorphDisplay.scoreElement);
				isomorphDisplay.element.onclick = () => this.selectIsomorph(pattern);

				this.isomorphListElement.appendChild(isomorphDisplay.element);
				this.isomorphDisplays[pattern] = isomorphDisplay;
			}
		}

		// Setup the info for the list
		this.isomorphListInfoElement.innerHTML = "";

		let infoElement1 = document.createElement("div");
		infoElement1.textContent = "Total patterns: " + this.sortedIsomorphs.length;
		this.isomorphListInfoElement.appendChild(infoElement1);

		let infoElement2 = document.createElement("div");
		let totalInstances = Object.values(this.generator.isomorphs).reduce((acc, val) => acc + val.instances.length, 0);
		infoElement2.textContent = "Total instances: " + totalInstances;
		this.isomorphListInfoElement.appendChild(infoElement2);

		this.calculateAndHighlight();
	}

	selectIsomorph(pattern) {
		if (this.selectedPatterns[pattern]) {
			this.isomorphDisplays[pattern].element.classList.remove("selected");
			delete this.selectedPatterns[pattern];
		} else {
			this.isomorphDisplays[pattern].element.classList.add("selected");
			this.selectedPatterns[pattern] = true;
		}
		this.calculateAndHighlight();
	}

	selectAllIsomorphs() {
		for (let pattern in this.isomorphDisplays) {
			this.isomorphDisplays[pattern].element.classList.add("selected");
			this.selectedPatterns[pattern] = true;
		}
		this.calculateAndHighlight();
	}

	deselectAllIsomorphs() {
		for (let pattern in this.isomorphDisplays) {
			this.isomorphDisplays[pattern].element.classList.remove("selected");
			delete this.selectedPatterns[pattern];
		}
		this.calculateAndHighlight();
	}

	selectLetter(position) {
		// Remove outline from old position
		if (this.selectedPosition != null) {
			this.app.messageDisplays[this.selectedPosition[0]].letters[this.selectedPosition[1]].classList.toggle("outlined", false);
		}

		// Either toggle or replace with new position
		if (this.selectedPosition != null && position != null && this.selectedPosition[0] == position[0] && this.selectedPosition[1] == position[1]) {
			this.selectedPosition = null;
		} else {
			this.selectedPosition = position;
			if (this.selectedPosition != null) {
				this.app.messageDisplays[this.selectedPosition[0]].letters[this.selectedPosition[1]].classList.toggle("outlined", true);
			}
		}

		// Not selecting anything so enable all isomorphs
		if (this.selectedPosition == null) {
			for (let pattern in this.isomorphDisplays) {
				this.isomorphDisplays[pattern].element.style.display = "flex";
			}
			return;
		}

		// Filter visible isormorphs to only those including the position
		for (let pattern in this.isomorphDisplays) {
			let included = false;
			for (let i = 0; i < this.generator.isomorphs[pattern].instances.length; i++) {
				const instance = this.generator.isomorphs[pattern].instances[i];
				if (instance[0] == this.selectedPosition[0] && instance[1] < this.selectedPosition[1] && instance[1] + pattern.length > this.selectedPosition[1]) {
					included = true;
					break;
				}
			}

			this.isomorphDisplays[pattern].element.style.display = included ? "flex" : "none";
		}
	}

	calculateAndHighlight() {
		if (!this.isVisible) return;

		for (let pattern in this.isomorphDisplays) {
			this.isomorphDisplays[pattern].patternElement.style.backgroundColor = null;
		}

		if (Object.keys(this.selectedPatterns).length == 0) {
			this.app.highlightMessagesUniform(Styles.StandardDark);
			return;
		}

		this.app.highlightMessagesUniform(Styles.Disabled);

		if (this.showSeperated) {
			// Setup the data
			let sharedValues = [];
			for (let msgIndex in this.app.messages) {
				sharedValues.push([]);
				for (let _ in this.app.messages[msgIndex]) {
					sharedValues[msgIndex].push([]);
				}
			}

			// Track each isomorph onto the messages (including if they are core)
			// Also can draw the colour back to the isomorph display
			for (let pattern in this.selectedPatterns) {
				let value = hashString(pattern);
				let style = Styles.getIndexed(value);
				let coreIndices = getCorePatternIndices(pattern);
				this.isomorphDisplays[pattern].patternElement.style.backgroundColor = style.bg;
				for (let instance of this.generator.isomorphs[pattern].instances) {
					for (let i = 0; i < pattern.length; i++) {
						const isCore = i >= coreIndices[0] && i <= coreIndices[1];
						sharedValues[instance[0]][instance[1] + i].push({ isCore, value });
					}
				}
			}

			// Update the message highlights
			for (let msg = 0; msg < this.app.messages.length; msg++) {
				for (let letter = 0; letter < this.app.messages[msg].length; letter++) {
					const values = sharedValues[msg][letter];
					const elements = this.app.messageDisplays[msg]?.letters[letter];
					if (values.length === 1) {
						elements.style.background = Styles.getIndexed(values[0].value, values[0].isCore ? null : "darken").bg;
					} else {
						const step = 100 / values.length;
						const stops = values.map((d, i) => {
							const c = Styles.getIndexed(d.value, d.isCore ? null : "darken").bg;
							const from = i * step;
							const to = (i + 1) * step;
							return `${c} ${from}% ${to}%`;
						});
						elements.style.background = `linear-gradient(0deg, ${stops.join(", ")})`;
					}
				}
			}
		} else {
			// Setup the data
			let sharedValues = [];
			let highlights = [];
			for (let msgIndex in this.app.messages) {
				sharedValues.push([]);
				highlights.push([]);
				for (let _ in this.app.messages[msgIndex]) {
					sharedValues[msgIndex].push([]);
					highlights[msgIndex].push([]);
				}
			}

			// Track each isomorph onto the messages
			for (let pattern in this.selectedPatterns) {
				let value = hashString(pattern);
				let [c0, c1] = getCorePatternIndices(pattern);
				for (let instance of this.generator.isomorphs[pattern].instances) {
					for (let i = c0; i <= c1; i++) {
						sharedValues[instance[0]][instance[1] + i].push(value);
					}
				}
			}

			for (let pattern in this.selectedPatterns) {
				let [c0, c1] = getCorePatternIndices(pattern);
				for (let i = c0; i <= c1; i++) {
					let mostComplex = null;
					for (let instance of this.generator.isomorphs[pattern].instances) {
						if (sharedValues[instance[0]][instance[1] + i].length > mostComplex) {
							mostComplex = sharedValues[instance[0]][instance[1] + i];
						}
					}
					const value = hashInts(mostComplex);
					const style = Styles.getIndexed(value);
					for (let instance of this.generator.isomorphs[pattern].instances) {
						highlights[instance[0]][instance[1] + i] = style.bg;
					}
				}
			}

			// Update the message highlights
			for (let msg = 0; msg < this.app.messages.length; msg++) {
				for (let letter = 0; letter < this.app.messages[msg].length; letter++) {
					const elements = this.app.messageDisplays[msg]?.letters[letter];
					elements.style.background = highlights[msg][letter];
				}
			}
		}
	}

	setShowSeperated(showSeperated) {
		this.showSeperated = showSeperated;
		this.calculateAndHighlight();
	}

	setVisible(isVisible) {
		this.isVisible = isVisible;
		this.containerElement.style.display = isVisible ? "flex" : "none";
		this.selectLetter(null);

		if (isVisible) {
			this.calculateAndHighlight();
		}

		this.app.messageListElement.classList.toggle("clickable-letters", isVisible);
	}
}

class EyeInspectorApp {
	constructor(messages) {
		this.messages = messages;
		this.highlightMode = null;
		this.showAscii = false;
		this.isTightSpacing = false;
		this.isFullscreen = false;

		this.onShowAsciiChanged = new MyEvent();
		this.onLetterClick = new MyEvent();

		// Setup panels
		this.isomorphGenerator = new IsomorphGeneratorPanel(this);
		this.sharedPTConfig = new SharedPTConfigPanel(this);
		this.isomorphInspector = new IsomorphInspectorPanel(this, this.isomorphGenerator);
		this.sharedPTInspector = new SharedPTInspectorPanel(this, this.isomorphGenerator);
		this.currentConfigPanels = [];
		this.currentInspectorPanels = [];
		this.configPanelsEmptyElement = document.getElementById("config-panels-empty");
		this.inspectorPanelsEmptyElement = document.getElementById("inspector-panels-empty");

		// Grab general element references
		this.panelContentElement = document.getElementById("messages-panel-content");
		this.messageListElement = document.getElementById("messages-list");
		this.messagesColumnIndicesElement = document.getElementById("messages-column-indices");
		this.messagesRowIndicesElement = document.getElementById("messages-row-indices");
		this.isomorphsInspectorElement = document.getElementById("isomorphs-inspector");

		// Setup toolbar
		this.highlightButtonElements = {
			[HighlightMode.None]: document.getElementById("toggle-highlight-none-button"),
			[HighlightMode.Values]: document.getElementById("toggle-highlight-values-button"),
			[HighlightMode.SharedCT]: document.getElementById("toggle-highlight-shared-ct-button"),
			[HighlightMode.Isomorphs]: document.getElementById("toggle-highlight-isomorphs-button"),
			[HighlightMode.SharedPT]: document.getElementById("toggle-highlight-shared-pt-button"),
		};

		this.showAsciiButtonElement = document.getElementById("toggle-show-ascii-button");
		this.tightSpacingButtonElement = document.getElementById("toggle-tight-spacing-button");
		this.fullscreenButtonElement = document.getElementById("toggle-fullscreen-button");

		for (const mode in this.highlightButtonElements) {
			this.highlightButtonElements[mode].onclick = () => this.setHighlightMode(mode);
		}

		this.showAsciiButtonElement.onclick = () => this.toggleShowAscii();
		this.tightSpacingButtonElement.onclick = () => this.toggleTightSpacing();
		this.fullscreenButtonElement.onclick = () => this.toggleFullscreen();

		// Initialise content
		this.messagesSharedCT = calculateShared(EYES);
		this.messagesAllomorphs = calculateAllomorphs(EYES);
		this.recreateMessageElements();
		this.toggleShowAscii(true);

		this.isomorphGenerator.generate();

		this.setHighlightMode(HighlightMode.Values);
	}

	recreateMessageElements() {
		this.messageListElement.innerHTML = "";
		this.messagesColumnIndicesElement.innerHTML = "";
		this.messagesRowIndicesElement.innerHTML = "";
		this.messageDisplays = [];
		this.maxLength = 0;

		for (let msgIndex = 0; msgIndex < this.messages.length; msgIndex++) {
			this.maxLength = Math.max(this.maxLength, this.messages[msgIndex].length);

			let msgDisplay = {};
			msgDisplay.letters = [];
			msgDisplay.index = msgIndex;
			msgDisplay.element = document.createElement("div");
			msgDisplay.element.classList.add("message");

			// Create element for each letter in each row
			for (let lIndex = 0; lIndex < this.messages[msgIndex].length; lIndex++) {
				let letterElement = document.createElement("div");
				letterElement.textContent = this.messages[msgIndex][lIndex];
				letterElement.onclick = () => this.onLetterClick.trigger(msgIndex, lIndex);

				msgDisplay.element.appendChild(letterElement);
				msgDisplay.letters.push(letterElement);
			}

			this.messageListElement.appendChild(msgDisplay.element);
			this.messageDisplays.push(msgDisplay);

			// Create index element for each row
			let rowIndexElement = document.createElement("div");
			rowIndexElement.textContent = msgIndex.toString();
			this.messagesRowIndicesElement.appendChild(rowIndexElement);
		}

		// Create index element for each column
		for (let i = 0; i < this.maxLength; i++) {
			let rowIndexElement = document.createElement("div");
			rowIndexElement.textContent = i.toString();
			if (i.toString().length > 2) rowIndexElement.style.fontSize = "0.8em";
			this.messagesColumnIndicesElement.appendChild(rowIndexElement);
		}
	}

	// ------------------ Toolbar ------------------

	toggleShowAscii(value = null) {
		if (value == null) value = !this.showAscii;
		this.showAscii = value;
		this.showAsciiButtonElement.classList.toggle("active", this.showAscii);

		for (let msg = 0; msg < this.messages.length; msg++) {
			for (let letter = 0; letter < this.messages[msg].length; letter++) {
				const element = this.messageDisplays[msg]?.letters[letter];
				const value = this.messages[msg][letter];
				element.textContent = this.showAscii ? String.fromCharCode(value + 32) : value;
			}
		}

		this.onShowAsciiChanged.trigger(this.showAscii);
	}

	toggleTightSpacing(value = null) {
		if (value == null) value = !this.isTightSpacing;
		this.isTightSpacing = value;
		this.tightSpacingButtonElement.classList.toggle("active", this.isTightSpacing);
		document.body.classList.toggle("tight-spacing", this.isTightSpacing);
	}

	toggleFullscreen(value = null) {
		if (value == null) value = !this.isFullscreen;
		this.isFullscreen = value;

		this.fullscreenButtonElement.classList.toggle("active", this.isFullscreen);
		document.body.classList.toggle("fullscreen", this.isFullscreen);
	}

	setHighlightMode(mode) {
		if (mode == this.highlightMode) return;
		this.highlightMode = mode;

		// Handle highlights and panels for the mode
		if (mode == HighlightMode.Values) {
			this.highlightMessages(EYES);
		} else if (mode == HighlightMode.SharedCT) {
			this.highlightMessagesUniform(Styles.Disabled);
			this.highlightMessages(this.messagesSharedCT, "exclude");
		} else {
			this.highlightMessagesUniform(Styles.StandardDark);
		}

		if (mode == HighlightMode.Isomorphs) {
			this.setConfigPanels([this.isomorphGenerator]);
			this.setInspectorPanels([this.isomorphInspector]);
		} else if (mode == HighlightMode.SharedPT) {
			this.setConfigPanels([this.isomorphGenerator, this.sharedPTConfig]);
			this.setInspectorPanels([this.sharedPTInspector]);
		}

		// And finally update the highlight mode buttons
		for (const mode in this.highlightButtonElements) {
			this.highlightButtonElements[mode].classList.toggle("active", mode == this.highlightMode);
		}
	}

	// ------------------ Letters ------------------

	highlightMessages(values, zeroAction = "include", zeroStyle = Styles.Disabled) {
		for (let msg = 0; msg < this.messages.length; msg++) {
			for (let letter = 0; letter < this.messages[msg].length; letter++) {
				const value = values[msg][letter];
				if (value == 0 && zeroAction == "exclude") {
					this.setLetterStyle(msg, letter, zeroStyle);
				} else {
					this.setLetterStyle(msg, letter, Styles.getIndexed(value));
				}
			}
		}
	}

	highlightMessagesUniform(style = Styles.StandardDark) {
		for (let msg = 0; msg < this.messages.length; msg++) {
			for (let letter = 0; letter < this.messages[msg].length; letter++) {
				this.setLetterStyle(msg, letter, style);
			}
		}
	}

	setLetterStyle(msg, letter, style) {
		const element = this.messageDisplays[msg]?.letters[letter];
		element.style.background = "";
		element.style.backgroundColor = style.bg;
		element.style.color = style.fg;
		const highlighted = style.highlighted || false;
		element.classList.toggle("highlighted", highlighted);
	}

	scrollTo(element) {
		this.panelContentElement.scrollLeft = element.offsetLeft - 100;
	}

	// ------------------ Panels ------------------

	setConfigPanels(panels) {
		for (const panel of this.currentConfigPanels) panel.setVisible(false);
		this.currentConfigPanels = panels;
		for (const panel of this.currentConfigPanels) panel.setVisible(true);
		this.configPanelsEmptyElement.style.display = Object.keys(this.currentConfigPanels).length == 0 ? "block" : "none";
	}

	setInspectorPanels(panels) {
		for (const panel of this.currentInspectorPanels) panel.setVisible(false);
		this.currentInspectorPanels = panels;
		for (const panel of this.currentInspectorPanels) panel.setVisible(true);
		this.inspectorPanelsEmptyElement.style.display = Object.keys(this.currentInspectorPanels).length == 0 ? "block" : "none";
	}
}

new EyeInspectorApp(EYES);
